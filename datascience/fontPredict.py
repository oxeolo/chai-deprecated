from skimage.measure import compare_ssim as ssim
import numpy as np
import cv2
import matplotlib.pyplot as plt

def squareIm(image,square_size):
    height,width = image.shape
    if(height>width):
      differ=height
    else:
      differ=width
    differ+=4

    mask = np.zeros((differ,differ), dtype="uint8")   

    x_pos=int((differ-width)/2)
    y_pos=int((differ-height)/2)

    mask[y_pos:y_pos+height,x_pos:x_pos+width]=image[0:height,0:width] #Gen Image
    mask=cv2.resize(mask,(square_size,square_size),interpolation=cv2.INTER_AREA)

    return mask

#Takes path, reads image and preprocesses it
def genImg(path):
    img = cv2.imread(path)
    imgGray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    #USE IF WANT SCALED BY FACTOR SIZE
    #imgResized = cv2.resize(imgGray, None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA)

    #USE IF WANT SET SIZE
    imgResized = squareIm(imgGray, 100)
    return imgResized

def meanSquaredError(imageA, imageB):
    #Take the two images, convert to floats, subtract the two, square them, add the two arrays,
    imgAFloat = imageA.astype('float')
    imgBFloat = imageB.astype('float')

    mseValNum = np.sum((imgAFloat - imgBFloat)**2) #From equation
    mseValDenom = float(imageA.shape[0] * imageA.shape[1]) #Product of x, y dim of image

    mseVal = mseValNum/mseValDenom
    return mseVal

def test():
    pathA = 'jayd.png'
    pathB = 'a.png'

    a = genImg(pathA)
    b = genImg(pathB)

    mse = meanSquaredError(a,b)
    s = ssim(a, b)

    print(mse)
    print(s)

test()