describe('Add to Cart',async()=>

    {
    
    it('Add items to Cart',async()=>
    {
    await browser.url("https://www.saucedemo.com/")
    await expect(browser).toHaveTitle('Swag Labs')
    await $("#user-name").setValue("standard_user")
    const password = $("#password")
    await password.setValue("secret_sauce")
    await $("#login-button").click()
    const addBackpack = $("#add-to-cart-sauce-labs-backpack")
    await addBackpack.click()
    const addBikeLight = $("#add-to-cart-sauce-labs-bike-light")
    await addBikeLight.click()
    const removeBtn = await $('#remove-sauce-labs-backpack')
    await expect(removeBtn).toBeDisplayed()

    
    
    })
    
    })
    
