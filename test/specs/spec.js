
describe ('basic test', () => {

  it('should open the app', () => {
    console.log('\nIt works!!!\n');
    browser.debug();
    const selector = 'new UiSelector().text("Continue")).className("com.android.permissioncontroller")';
    browser.click('android=' + selector);
    $(~Accessibility).click();
    const customView = '//android.widget.TextView[@content-desc="Custom View"]';
    browser.click(customView);


  });

});
