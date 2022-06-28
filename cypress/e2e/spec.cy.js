describe("App Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  //////---setting helper getters---//////
  const customerName = () => cy.get("input[name=customerName]");
  const size = () => cy.get(`[id="size-dropdown"]`);
  const sauce = () => cy.get("input[name=sauce]");
  const pepperoni = () => cy.get("input[name=pepperoni]");
  const sausage = () => cy.get("input[name=sausage]");
  const olives = () => cy.get("input[name=olives]");
  const onions = () => cy.get("input[name=onions]");
  const cheese = () => cy.get("input[name=cheese]");
  const submitButton = () => cy.get("form>button");
  const homeButton = () => cy.get(`[cy-id="homeButton"]`);
  const orderButton = () => cy.get(`[cy-id="orderButton"]`);
  const header = () => cy.get("h1");

  //////---Sanity Check---//////
  it("sanity check to check tests working", () => {
    expect(1 + 2).to.equal(3);
  });

  //////---unit check---//////
  it("the proper elements are showing on the Home page", () => {
    homeButton().should("exist");
    orderButton().should("exist");
    header().should("exist");
    submitButton().should("be.disabled");
  });

  describe("can fill in and submit the PIZZA Form", () => {
    it("can click on the home link to open home", () => {
      homeButton().click();
    });

    it("can type in the customer name input field", () => {
      customerName().should("have.value", "").type("cat").should("have.value", "cat");
    });

    it("can select checkboxes", () => {
      pepperoni().check();
      sausage().check();
      olives().check();
      onions().check();
      cheese().check();
    });

    describe("can submit the form", () => {
      it("can submit the form", () => {
        customerName().type("Banana");
        size().select("large");
        sauce().check("bbqSauce");
        pepperoni().check();
        sausage().check();
        olives().check();
        onions().check();
        cheese().check();
        submitButton().should("not.be.disabled").click();
        cy.contains("Congrats");
        cy.contains("large");
        cy.contains("bbqSauce");
        cy.contains("pepperoni");
        cy.contains("olives");
        cy.contains("cheese");
      });
    });
  });
});
