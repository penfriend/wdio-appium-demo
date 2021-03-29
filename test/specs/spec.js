
describe ('basic test', () => {

  it('should open the app', () => {
    console.log('\nIt works!!!\n');
    browser.debug();
    let okButton = driver.element("android:id/button1");
    okButton.click();
    $("~Content").click();
    const clipBoardMenuItem = driver.element("~Clipboard");
    clipBoardMenuItem.click();
    const dataTypesMenuItem = driver.element("~Data Types");
    dataTypesMenuItem.click();
    const copyStyledTextButton = driver.element("io.appium.android.apis:id/copy_styled_text");
    copyStyledTextButton.click();
  });

});
