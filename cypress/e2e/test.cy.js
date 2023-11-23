const username = "fake11@fake.com";
const password = "1234567890";

describe("Registration Test", () => {
  it("Should be able to register on practicesoftwaretesting.com", () => {
    // Visit the registration page
    cy.visit("https://practicesoftwaretesting.com/#/auth/register");

    // Fill in registration form fields
    cy.xpath('(//*[@data-test="first-name"])').type("Fake");
    cy.xpath('(//*[@data-test="last-name"])').type("Fake");
    cy.xpath('(//*[@data-test="dob"])').type("1993-01-30");
    cy.xpath('(//*[@data-test="address"])').type("1 Fake Avenue North");
    cy.xpath('(//*[@data-test="postcode"])').type("14344");
    cy.xpath('(//*[@data-test="state"])').type("Bulacan");
    cy.xpath('(//*[@data-test="city"])').type("Marilao");
    cy.xpath('(//*[@data-test="country"])').select("PH");
    cy.xpath('(//*[@data-test="phone"])').type("1234567890");
    cy.xpath('(//*[@data-test="email"])').type(username);
    cy.xpath('(//*[@data-test="password"])').type(password);

    // Submit the registration form
    cy.xpath('(//*[@data-test="register-submit"])').click();

    // Assert that registration was successful
    cy.url().should("eq", "https://practicesoftwaretesting.com/#/auth/login");
  });
});

describe("Login Test", () => {
  it("Should be able to login on practicesoftwaretesting.com", () => {
    // Visit the login page
    cy.visit("https://practicesoftwaretesting.com/#/auth/login");

    // // Fill in login form fields
    cy.xpath('(//*[@data-test="email"])').type(username);
    cy.xpath('(//*[@data-test="password"])').type(password);

    // // Submit the login form
    cy.xpath('(//*[@data-test="login-submit"])').click();

    // // Assert that login is successful
    cy.url().should("eq", "https://practicesoftwaretesting.com/#/account");
  });
});

describe("Add to Cart Test", () => {
  it("Should be able to add items to cart", () => {
    // Visit the login page
    cy.visit("https://practicesoftwaretesting.com/#/auth/login");

    // // Fill in login form fields
    cy.xpath('(//*[@data-test="email"])').type(username);
    cy.xpath('(//*[@data-test="password"])').type(password);

    // // Submit the login form
    cy.xpath('(//*[@data-test="login-submit"])').click();

    // // Assert that login is successful
    cy.url().should("eq", "https://practicesoftwaretesting.com/#/account");

    // Visit the home page
    cy.visit("https://practicesoftwaretesting.com/#");

    // // Select Product id product-01HFYNDM8P3HB0RWP5RNGZ2Z8J
    cy.xpath('(//*[@data-test="product-01HFYNDM8P3HB0RWP5RNGZ2Z8J"])').click();

    // // Add to cart
    cy.xpath('(//*[@data-test="add-to-cart"])').click();

    // // Checkout
    cy.xpath('(//*[@data-test="nav-cart"])').click();
    cy.xpath('(//*[@data-test="proceed-1"])').click();
    cy.xpath('(//*[@data-test="proceed-2"])').click();
    cy.xpath('(//*[@data-test="proceed-3"])').click();
    cy.xpath('(//*[@data-test="payment-method"])').select("2: Cash on Delivery")
    cy.xpath('(//*[@data-test="account-name"])').type("Fake")
    cy.xpath('(//*[@data-test="account-number"])').type("1234567890")
    cy.xpath('(//*[@data-test="finish"])').click();
    cy.get(".alert-success").should("be.visible");
    cy.url().should("eq", "https://practicesoftwaretesting.com/#/checkout");
  });
});
