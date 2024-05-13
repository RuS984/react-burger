import { apiUrl } from "../../src/utils/appApi";
import {
  bunCategory,
  bunDropTarget,
  ingredientDropTarget,
  souseCategory,
  titleBurgerIngredients,
} from "./const";

describe("creating an order", () => {
  before(() => {
    cy.intercept("GET", `${apiUrl}/ingredients`, {
      fixture: "ingredients.json",
    }).as("getIngredients");
    cy.visit("");
    cy.intercept("POST", `${apiUrl}/auth/login`, {
      fixture: "user.json",
    }).as("loginUser");
    cy.intercept("POST", `${apiUrl}/orders`, {
      fixture: "order.json",
    }).as("postOrder");
  });

  it("order should be created", () => {
    cy.get(bunCategory).first().as("bunDrag");
    cy.get(bunDropTarget).as("bunDropTarget");
    cy.get("@bunDrag").trigger("dragstart");
    cy.get("@bunDropTarget").first().trigger("drop");
    cy.get(souseCategory).eq(2).as("fillingDrag");
    cy.get(ingredientDropTarget).as("ingredientDropTarget");
    cy.get("@fillingDrag").trigger("dragstart");
    cy.get("@ingredientDropTarget").trigger("drop");
    cy.get("button").contains("Оформить заказ").click();

    cy.get('[data-testid="titleLoginForm"]').should("contain", "Вход");
    const email = "test@mail.ru";
    const password = "Ii123!";
    cy.get('[name="email"]').type(`${email}`);
    cy.get('[name="password"]').type(`${password}{enter}`);

    cy.get(titleBurgerIngredients);

    cy.get("button").contains("Оформить заказ").click();

    cy.get('[data-testid="orderNumber"]').should("contain", "123");
    cy.get('[data-testid="modalOverlay"]').click({ force: true });

    cy.get("@ingredientDropTarget");
    cy.get("@bunDropTarget");
  });
});
