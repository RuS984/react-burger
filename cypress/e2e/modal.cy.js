import { apiUrl } from "../../src/utils/appApi";
import { bunCategory, souseCategory, titleBurgerIngredients } from "./const";

describe("Checking the operation of the modal window", () => {
  beforeEach(() => {
    cy.intercept("GET", `${apiUrl}/ingredients`, { 
      fixture: "ingredients.json",
    }).as("getIngredientsRequest");
    cy.visit("");
  });

  it("should open modal window category BUN", () => {
    cy.get(bunCategory).first().click();
    cy.get('[data-testid="modal"]');
    cy.contains("Kраторная булка N-200i");
    cy.get('[data-testid="modalOverlay"]').click({ force: true });
    cy.get(titleBurgerIngredients);
  });

  it("should open modal window category  SOUSE ", () => {
    cy.get(souseCategory).first().click();
    cy.get('[data-testid="modal"]');
    cy.contains("Соус Spicy-X");
    cy.get('[data-testid="modalOverlay"]').click({ force: true });
    cy.get(titleBurgerIngredients);
  });
});
