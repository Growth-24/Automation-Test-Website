describe('Filter items on products page',async()=>

    {
    
    it('Filter products by price',async()=>
    {
    await browser.url("https://www.saucedemo.com/")
    await expect(browser).toHaveTitle('Swag Labs')
    await $("#user-name").setValue("standard_user")
    const password = $("#password")
    await password.setValue("secret_sauce")
    await $("#login-button").click()
    const filterDropdown = await $(".product_sort_container")
    filterDropdown.selectByAttribute('value','lohi')
    filterDropdown.selectByVisibleText('Price (high to low)')
    console.log(await filterDropdown.getValue())
   
    
    
    })

    it('Filter products by alphabet',async()=>
        {
        await browser.url("https://www.saucedemo.com/")
        await expect(browser).toHaveTitle('Swag Labs')
        await $("#user-name").setValue("standard_user")
        const password = $("#password")
        await password.setValue("secret_sauce")
        await $("#login-button").click()
        const filterDropdown = await $(".product_sort_container")
        filterDropdown.selectByAttribute('value','az')
        filterDropdown.selectByVisibleText('Name (Z to A)')
        console.log(await filterDropdown.getValue())
   
        
        
        })
    
    })
    

