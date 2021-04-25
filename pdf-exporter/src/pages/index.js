import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import styles from '../styles/Home.module.css'

export default class Home extends React.Component {
  render() {
      return (
        <div>
          <div className="example-config">
            <button className="k-button" onClick={this.exportPDFWithComponent}>
              Export with component
            </button>
                  &nbsp;
            <button className="k-button" onClick={this.exportPDFWithMethod}>
              Export with method
            </button>
          </div>
          <div className="border rounded p-2">
            <PDFExport
              margin={40}
              paperSize="auto"
              author="KendoReact Team"
              fileName={`Report for ${new Date().getFullYear()}`}
              ref={component => (this.pdfExportComponent = component)}
            >
              <div ref={container => (this.container = container)} className="container">
                <h1 className={styles.title}>This is a title</h1>
                <div>
                  <ul>
                    {[1, 2, 3, 4, 5].map(item => <li>{`Program-${item}`}</li>)}
                  </ul>
                </div>
              </div>
            </PDFExport>
          </div>
        </div>
      );
  }

  exportPDFWithMethod = () => {
      savePDF(ReactDOM.findDOMNode(this.container), {
          paperSize: "auto",
          margin: 40,
          fileName: `Report for ${new Date().getFullYear()}`
      });
  };
  exportPDFWithComponent = () => {
      this.pdfExportComponent.save();
  };
}
