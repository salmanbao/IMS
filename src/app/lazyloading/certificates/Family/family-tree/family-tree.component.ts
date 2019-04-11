import { Component, AfterViewInit, ViewChild } from '@angular/core';
import go = require('go');

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements AfterViewInit {
  @ViewChild('myDiagramDiv') div: { nativeElement: any; };

  ngAfterViewInit() {

    // create a make type from go namespace and assign it to MAKE
    //const MAKE = go.GraphObject.make;
    const MAKE = go.GraphObject.make;
    // get the div in the HTML file
    const diagramDiv = this.div.nativeElement;

    // instatiate MAKE with Diagram type and the diagramDiv
    const myDiagram =
      MAKE(go.Diagram, diagramDiv,
        {
          initialContentAlignment: go.Spot.Center, // center Diagram contents
          "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
          layout: MAKE(go.TreeLayout, // specify a Diagram.layout that arranges trees
            { angle: 90, layerSpacing: 35 })
        });

    // the template we defined earlier
    myDiagram.nodeTemplate =
      MAKE(go.Node, "Horizontal",
        { background: "#DD4814" },
        MAKE(go.Picture,
          { margin: 10, width: 50, height: 50, background: "red" },
          new go.Binding("source")),
        MAKE(go.TextBlock, "Default Text",
          { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
          new go.Binding("text", "name"))
      );

    // define a Link template that routes orthogonally, with no arrowhead
    myDiagram.linkTemplate =
      MAKE(go.Link,
        { routing: go.Link.Orthogonal, corner: 5 },
        MAKE(go.Shape, { strokeWidth: 3, stroke: "#555" })); // the link shape

    let model = MAKE(go.TreeModel);
    model.nodeDataArray =
      [
        { key: "1", name: "Grand Father", source: "https://picsum.photos/200/300" },
        { key: "2", parent: "1", name: "Father", source: "https://picsum.photos/200/300" },
        { key: "3", parent: "1", name: "Father", source: "https://picsum.photos/200/300" },
        { key: "4", parent: "3", name: "Child", source: "https://picsum.photos/200/300" },
        { key: "5", parent: "3", name: "Child", source: "https://picsum.photos/200/300" },
        { key: "6", parent: "2", name: "Child", source: "https://picsum.photos/200/300" }
      ];
    myDiagram.model = model;

  }

}
