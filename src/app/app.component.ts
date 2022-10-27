import { Component } from "@angular/core";
import { SurveyModel, StylesManager } from "survey-core";

StylesManager.applyTheme("defaultV2");
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  model = new SurveyModel({
  elements: [
  {
    name: "name",
    type: "text",
    title: "Please enter your name:",
    placeHolder: "Jon Snow",
    isRequired: true,
   }
  ]
});
}