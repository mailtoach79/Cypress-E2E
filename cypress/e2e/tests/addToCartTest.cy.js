import {homePage} from '../../pages/homePage';
const homePageObj = new homePage();
import testData from '../../fixtures/testData.json';

describe('Test Automation', ()=>{

    before(() => {
        cy.login(testData.login.username, testData.login.password);
    });

    it('Add to Cart Test', ()=>{
        homePageObj.searchProduct(testData.product.productName);
        homePageObj.addToCart();
        homePageObj.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
    })
})