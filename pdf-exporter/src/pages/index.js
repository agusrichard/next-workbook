import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from "@progress/kendo-react-charts";

import products from "../assets/products.json";
import data from "../assets/power-distribution-data.json";

const labelContent = e => e.category;

const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const firstSeries = [123, 276, 310, 212, 240, 156, 98];
const secondSeries = [165, 210, 287, 144, 190, 167, 212];
const thirdSeries = [56, 140, 195, 46, 123, 78, 95];

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
              ref={component => (this.pdfExportComponent = component)}
              paperSize="auto"
              margin={40}
              fileName={`Report for ${new Date().getFullYear()}`}
              author="KendoReact Team"
                  >
              <div ref={container => (this.container = container)}>
                <h3 className="text-center">Monthly report</h3>
                <hr className="k-hr" />
                <Grid
                  style={{ maxHeight: "400px" }}
                  data={products.slice(0, 5)}
                          >
                  <Column field="ProductID" title="ID" width="40px" />
                  <Column field="ProductName" title="Name" width="250px" />
                  <Column field="Category.CategoryName" title="CategoryName" />
                  <Column field="UnitPrice" title="Price" width="80px" />
                  <Column field="UnitsInStock" title="In stock" width="80px" />
                </Grid>
                <div className="row">
                  <div className="col-6">
                    <Chart>
                      <ChartSeries>
                        <ChartSeriesItem
                          type="donut"
                          data={data}
                          categoryField="kind"
                          field="share"
                                          >
                          <ChartSeriesLabels
                            color="#fff"
                            background="none"
                            content={labelContent}
                                              />
                        </ChartSeriesItem>
                      </ChartSeries>
                      <ChartLegend visible={false} />
                    </Chart>
                  </div>
                  <div className="col-6">
                    <Chart>
                      <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} />
                      </ChartCategoryAxis>
                      <ChartSeries>
                        <ChartSeriesItem type="area" data={firstSeries} />
                        <ChartSeriesItem type="area" data={secondSeries} />
                        <ChartSeriesItem type="area" data={thirdSeries} />
                      </ChartSeries>
                    </Chart>
                  </div>
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
