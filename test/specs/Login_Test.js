


describe('Ecommerce Application Login',async()=>

{

it('Login Fail Page',async()=>
{
await browser.url("https://www.saucedemo.com/")
await expect(browser).toHaveTitle('Swag Labs')
await $("#user-name").setValue("standard_user")
const password = $("#password")
await password.setValue("khhgkjkjh")
await $("#login-button").click()
const element = await $('.error-message-container')
await expect(element).toHaveText('Epic sadface: Username and password do not match any user in this service')



})

})


it('Login Success Page',async()=> {

await browser.url("https://www.saucedemo.com/")
await $("#user-name").setValue("standard_user")
const password = $("#password")
await password.setValue("secret_sauce")
await $("#login-button").click()
await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'))
await expect(browser).toHaveTitle('Swag Labs')


})