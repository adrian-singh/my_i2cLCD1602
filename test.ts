let item = 0
MY_I2C_LCD1602.LcdInit(0)
MY_I2C_LCD1602.ShowString("Hello", 0, 0)
basic.forever(() => {
    item += 1
    MY_I2C_LCD1602.ShowNumber(item, 0, 1)
    basic.pause(1000)
})
