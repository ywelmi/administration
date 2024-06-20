import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";
import InvoiceFiveSign from "../Invoice-5/InvoiceFiveSign";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Invoice, InvoiceFour } from "../../../../../utils/Constant";

const InvoiceFourContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceFour} parent={Invoice} />
      <div ref={componentRef}>
        <Container>
          <Card>
            <CardBody>
              <Table responsive borderless style={{width:1160, margin:"0 auto", }}>
                <tbody>
                  <tr>
                    <InvoiceFourHeader />
                  </tr>
                  <tr>
                    <InvoiceFourDetail />
                  </tr>
                  <tr>
                    <InvoiceFourTable />
                  </tr>
                  <tr>
                    <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #006666 20.61%, #0DA759 103.6%)", display: "block", marginTop: 6 }} />
                  </tr>
                  <tr>
                    <InvoiceTotal />
                  </tr>
                  <InvoiceFiveSign />
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Container>
      </div>
      <InvoiceButtons handlePrint={handlePrint} />
    </>
  );
};

export default InvoiceFourContainer;
