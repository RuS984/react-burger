import { apiUrl } from "../../src/utils/appApi";
import {
  bunCategory,
  bunDropTarget,
  ingredientDropTarget,
  souseCategory,
  mainCategory
} from "./const";

describe("Test DnD", () => {
  beforeEach(() => {
    cy.intercept("GET", `${apiUrl}/ingredients`, { 
      fixture: "ingredients.json",
    }).as("getIngredientsRequest");
    cy.visit("");
    cy.get(bunDropTarget).as("bunDropTarget");
    cy.get(ingredientDropTarget).as("ingredientDropTarget");
  });

  it("should drag Crater Bun in burger constructor", () => {
    cy.get(bunCategory).first().as("bunDrag");
    cy.get("@bunDrag").trigger("dragstart");
    cy.get("@bunDropTarget").first().trigger("drop");
    cy.get("@bunDropTarget").should("contain", "Kраторная булка");
    cy.get("@bunDrag").find('[class="counter__num"]').should("contain", "2");
  });

  it("should drag Fluorescent bun in burger constructor ", () => {
    cy.get(bunCategory).eq(1).as("bunDrag");
    cy.get("@bunDrag").trigger("dragstart");
    cy.get("@bunDropTarget").first().trigger("drop");
    cy.get("@bunDropTarget").should("contain", "Флюоресцентная булка");
    cy.get("@bunDrag").find('[class="counter__num"]').should("contain", "2");
  });

  it("should drag two Traditional sauce in burger constructor and delete one", () => {
    cy.get(souseCategory).eq(2).as("fillingDrag");
    cy.get("@fillingDrag").trigger("dragstart");
    cy.get("@ingredientDropTarget").trigger("drop");
    cy.get("@ingredientDropTarget")
      .first()
      .should("contain", "Соус традиционный галактический");
    cy.get("@fillingDrag")
      .find('[class="counter__num"]')
      .should("contain", "1");

    cy.get("@fillingDrag").trigger("dragstart");
    cy.get("@ingredientDropTarget").trigger("drop");
    cy.get("@ingredientDropTarget")
      .children()
      .eq(1)
      .should("contain", "Соус традиционный галактический");
    cy.get("@fillingDrag")
      .find('[class="counter__num"]')
      .should("contain", "2");

    cy.get("@ingredientDropTarget")
      .children()
      .should(($li) => {
        expect($li).to.have.length(2);
      });

    cy.get("@ingredientDropTarget")
      .children()
      .eq(1)
      .find('[class="constructor-element__action pr-2"]')
      .click();

    cy.get("@fillingDrag")
      .find('[class="counter__num"]')
      .should("contain", "1");

    cy.get("@ingredientDropTarget")
      .children()
      .should(($li) => {
        expect($li).to.have.length(1);
      });
  });

  it("replace ingredients", () => {
    cy.get(souseCategory).first().as("souseDrag");
    cy.get("@souseDrag").trigger("dragstart");
    cy.get("@ingredientDropTarget").trigger("drop");

    cy.get(mainCategory).first().as("mainDrag");
    cy.get("@mainDrag").trigger("dragstart");
    cy.get("@ingredientDropTarget").trigger("drop");

    cy.get("@ingredientDropTarget").children().first().as("firstIngredient");
    cy.get("@ingredientDropTarget").children().eq(1).as("secondIngredient");

    cy.get("@firstIngredient").should("contain", "Соус Spicy-X");
    cy.get("@secondIngredient").should("contain",
      "Биокотлета из марсианской Магнолии"
    );

    cy.get("@secondIngredient").trigger("dragstart");
    cy.get("@firstIngredient").trigger("dragenter");
    cy.get("@firstIngredient").trigger("dragover");
    cy.get("@firstIngredient").trigger("drop");
    cy.get("@firstIngredient").trigger("dragend");

    cy.get("@firstIngredient").should("contain",
      "Биокотлета из марсианской Магнолии"
    );
    cy.get("@secondIngredient").should("contain", "Соус Spicy-X");
  });
});
