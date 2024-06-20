import { Link } from "react-router-dom";
import { Badges, LI, UL } from "../../../../AbstractElements";
import {
  AjaxSourcedColumnsInterface,
  CustomCellInterFaces,
  HtmlColumnsInterface,
  ServerSideProcessingColumnsInterface,
} from "../../../../Types/Tables/DataTables/DataSource";
import { TableColumn } from "react-data-table-component";
import { Href } from "../../../../utils/Constant";

export const htmlData = [
  {
    text: "The foundation for DataTables is progressive enhancement, so it is very adept at reading table information directly from the DOM. This example shows how easy it is to add searching, ordering and paging to your HTML table by simply running DataTables on it.",
  },
];

const handlePDFClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const pdfUrl = "/assets/pdf/sample.pdf"; // Replace with your actual PDF file name or path
  window.open(pdfUrl, "_blank");
};

export const htmlColumnData = [
  {
    id: 1,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          onClick={handlePDFClick}
          rel="/assets/images/favicon.png"
          to="/public/assets/pdf/sample.pdf"
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
  },
  {
    id: 2,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
  },
  {
    id: 3,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
  },
  {
    id: 4,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
  },
  {
    id: 5,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "c.marshall@datatables.net",
    salary: "$470,600",
  },
  {
    id: 6,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    badge: "Pending",
    color: "danger",
    email: "c.hurst@datatables.net",
    salary: "$205,500",
  },
  {
    id: 7,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
  },
  {
    id: 8,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
  },
  {
    id: 9,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
  },
  {
    id: 10,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
  },
  {
    id: 11,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
  },
  {
    id: 12,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
  },
  {
    id: 13,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "warning",
    color: "in process",
    email: "s.frost@datatables.net",
    salary: "$103,600",
  },
  {
    id: 14,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
  },
  {
    id: 15,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
  },
  {
    id: 16,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
  },
  {
    id: 17,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
  },
  {
    id: 18,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
  },
  {
    id: 19,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "c.marshall@datatables.net",
    salary: "$470,600",
  },
  {
    id: 20,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    badge: "Pending",
    color: "danger",
    email: "c.hurst@datatables.net",
    salary: "$205,500",
  },
  {
    id: 21,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
  },
  {
    id: 22,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
  },
  {
    id: 23,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
  },
  {
    id: 24,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
  },
  {
    id: 25,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
  },
  {
    id: 26,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
  },
  {
    id: 27,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "warning",
    color: "in process",
    email: "s.frost@datatables.net",
    salary: "$103,600",
  },
  {
    id: 28,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
  },
  {
    id: 29,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
  },
  {
    id: 30,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
  },
  {
    id: 31,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
  },
  {
    id: 32,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
  },
  {
    id: 33,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
  },
  {
    id: 34,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
  },
  {
    id: 35,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "warning",
    color: "in process",
    email: "s.frost@datatables.net",
    salary: "$103,600",
  },
  {
    id: 36,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
  },
  {
    id: 37,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
  },
  {
    id: 38,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
  },
  {
    id: 39,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
  },
  {
    id: 40,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
  },
  {
    id: 41,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
  },
  {
    id: 42,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
  },
  {
    id: 43,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
  },
  {
    id: 44,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "warning",
    color: "in process",
    email: "s.frost@datatables.net",
    salary: "$103,600",
  },
  {
    id: 45,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
  },
  {
    id: 46,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
  },
  {
    id: 47,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
  },
  {
    id: 48,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
  },
  {
    id: 49,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
  },
  {
    id: 50,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
  },
  {
    id: 51,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
  },
  {
    id: 52,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
  },
  {
    id: 53,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
  },
  {
    id: 54,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
  },
  {
    id: 55,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "c.marshall@datatables.net",
    salary: "$470,600",
  },
  {
    id: 56,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    badge: "Pending",
    color: "danger",
    email: "c.hurst@datatables.net",
    salary: "$205,500",
  },
  {
    id: 57,
    cv: (
      <div className="action">
        <Link
          className="pdf"
          to="/assets/pdf/sample.pdf"
          onClick={handlePDFClick}
          target="_blank"
        >
          <i className="icofont icofont-file-pdf"> </i>
        </Link>
      </div>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
  },
];

interface ActionDataSourceProp {
  id: number;
}

const ActionDataSource: React.FC<ActionDataSourceProp> = ({ id }) => (
  <UL className="action simple-list d-flex flex-row" key={id}>
    <LI className="edit">
      <Link to={Href}>
        <i className="icon-pencil-alt" />
      </Link>
    </LI>
    <LI className="delete">
      <Link to={Href}>
        <i className="icon-trash" />
      </Link>
    </LI>
  </UL>
);

const CustomBadge: React.FC<CustomCellInterFaces> = ({ position, color }) => {
  return (
    <Badges pill color={color}>
      {position}
    </Badges>
  );
};

export const htmlColumn: TableColumn<HtmlColumnsInterface>[] = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row) => row.position,
    sortable: true,
  },
  {
    name: "Salary",
    selector: (row) => row.salary,
    sortable: true,
  },
  {
    name: "Office",
    selector: (row) => row.office,
    sortable: true,
  },
  {
    name: "Cv",
    cell: (row) => row.cv,
    sortable: true,
  },
  {
    name: "Status",
    cell: (row) => <CustomBadge color={row.color} position={row.badge} />,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => <ActionDataSource id={row.id} />,
    sortable: true,
  },
];

export const ajaxSourceData = [
  {
    text: "DataTables has the ability to read data from virtually any JSON data source that can be obtained by Ajax. This can be done, in its most simple form, by setting the ",
    code: "ajax:option",
  },
  {
    text: " option to the address of the JSON data source.",
  },
];

export const ajaxSourceDataList = [
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    extends: "5797",
    date: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    extends: "1562",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    extends: "2558",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    extends: "1314",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    extends: "2290",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    extends: "3023",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona Green",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    extends: "2947",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    extends: "8422",
    date: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Gavin Cortez",
    position: "Team Leader",
    office: "San Francisco",
    extends: "2860",
    date: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    extends: "8822",
    date: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    extends: "1016",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },

  {
    name: "Hope Fuentes",
    position: "Secretary",
    office: "San Francisco",
    extends: "6318",
    date: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: "Howard Hatfield",
    position: "Office Manager",
    office: "San Francisco",
    extends: "7031",
    date: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: "Jackson Bradshaw",
    position: "Director",
    office: "New York",
    extends: "1042",
    date: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Jenette Caldwell",
    position: "Development Lead",
    office: "New York",
    extends: "1937",
    date: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: "Jennifer Acosta",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    extends: "3431",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    extends: "1562",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    extends: "2558",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    extends: "1314",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    extends: "1016",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    extends: "2290",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    extends: "3023",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona Green",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    extends: "2947",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Jennifer Acosta",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    extends: "3431",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
];

export const ajaxSourceColumn: TableColumn<AjaxSourcedColumnsInterface>[] = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row) => row.position,
    sortable: true,
  },
  {
    name: "Office",
    selector: (row) => row.office,
    sortable: true,
  },
  {
    name: "Extn.",
    selector: (row) => row.extends,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Salary",
    selector: (row) => row.salary,
    sortable: true,
  },
];

export const javaScriptSourceData = [
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    extends: "5797",
    date: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    extends: "1562",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    extends: "2558",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    extends: "1314",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    extends: "2290",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    extends: "3023",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona Green",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    extends: "2947",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    extends: "8422",
    date: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Gavin Cortez",
    position: "Team Leader",
    office: "San Francisco",
    extends: "2860",
    date: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    extends: "8822",
    date: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    extends: "1016",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },

  {
    name: "Hope Fuentes",
    position: "Secretary",
    office: "San Francisco",
    extends: "6318",
    date: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: "Howard Hatfield",
    position: "Office Manager",
    office: "San Francisco",
    extends: "7031",
    date: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: "Jackson Bradshaw",
    position: "Director",
    office: "New York",
    extends: "1042",
    date: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Jenette Caldwell",
    position: "Development Lead",
    office: "New York",
    extends: "1937",
    date: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: "Jennifer Acosta",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    extends: "3431",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
];

export const javaScriptSourceColumn: TableColumn<AjaxSourcedColumnsInterface>[] =
  [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      center: false,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      sortable: true,
      center: false,
    },
    {
      name: "Office",
      selector: (row) => row.office,
      sortable: true,
      center: false,
    },
    {
      name: "Extn.",
      selector: (row) => row.extends,
      sortable: true,
      center: false,
    },
    {
      name: "Start Date",
      selector: (row) => row.date,
      sortable: true,
      center: false,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
      sortable: true,
      center: false,
    },
  ];

export const serverData = [
  {
    name: "Angelica",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    lastName: "Ramos",
    date: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Archana",
    position: "Accountant",
    office: "Tokyo",
    lastName: "Desai",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton",
    position: "Junior Technical Author",
    office: "San Francisco",
    lastName: "Cox",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley",
    position: "Software Engineer",
    office: "London",
    lastName: "Greer",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden",
    position: "Software Engineer",
    office: "San Francisco",
    lastName: "Wagner",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno",
    position: "Software Engineer",
    office: "London",
    lastName: "Nash",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar",
    position: "Pre-Sales Support",
    office: "New York",
    lastName: "Vance",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara",
    position: "Sales Assistant",
    office: "New York",
    lastName: "Stevens",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    lastName: "Kelly",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde",
    position: "Regional Director",
    office: "San Francisco",
    lastName: "Marshall",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai",
    position: "Personnel Lead",
    office: "Edinburgh",
    lastName: "Rios",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris",
    position: "Sales Assistant",
    office: "Sidney",
    lastName: "Wilder",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    lastName: "Green",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Garrett",
    position: "Accountant",
    office: "Tokyo",
    lastName: "Winters",
    date: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Gavin",
    position: "Team Leader",
    office: "San Francisco",
    lastName: "Cortez",
    date: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: "Gavin",
    position: "Developer",
    office: "Edinburgh",
    lastName: "Joyce",
    date: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: "Gloria",
    position: "Systems Administrator",
    office: "New York",
    lastName: "Little",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley",
    position: "Senior Marketing Designer",
    office: "London",
    lastName: "Kennedy",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Herrod",
    position: "Sales Assistant",
    office: "San Francisco",
    lastName: "Chandler",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena",
    position: "Office Manager",
    office: "London",
    lastName: "Gaines",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria",
    position: "Systems Administrator",
    office: "New York",
    lastName: "Little",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley",
    position: "Senior Marketing Designer",
    office: "London",
    lastName: "Kennedy",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione",
    position: "Regional Director",
    office: "London",
    lastName: "Butler",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Herrod",
    position: "Sales Assistant",
    office: "San Francisco",
    lastName: "Chandler",
    date: "2012/08/06",
    salary: "$137,500",
  },

  {
    name: "Hope",
    position: "Secretary",
    office: "San Francisco",
    lastName: "Fuentes",
    date: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: "Howard",
    position: "Office Manager",
    office: "San Francisco",
    lastName: "Hatfield",
    date: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: "Jackson",
    position: "Director",
    office: "New York",
    lastName: "Bradshaw",
    date: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: "Jena",
    position: "Office Manager",
    office: "London",
    lastName: "Gaines",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Jenette",
    position: "Development Lead",
    office: "New York",
    lastName: "Caldwell",
    date: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: "Jennifer",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    lastName: "Acosta",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno",
    position: "Software Engineer",
    office: "London",
    lastName: "Nash",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar",
    position: "Pre-Sales Support",
    office: "New York",
    lastName: "Vance",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara",
    position: "Sales Assistant",
    office: "New York",
    lastName: "Stevens",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    lastName: "Kelly",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde",
    position: "Regional Director",
    office: "San Francisco",
    lastName: "Marshall",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana",
    position: "Accountant",
    office: "Tokyo",
    lastName: "Desai",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton",
    position: "Junior Technical Author",
    office: "San Francisco",
    lastName: "Cox",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley",
    position: "Software Engineer",
    office: "London",
    lastName: "Greer",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden",
    position: "Software Engineer",
    office: "San Francisco",
    lastName: "Wagner",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno",
    position: "Software Engineer",
    office: "London",
    lastName: "Nash",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Herrod",
    position: "Sales Assistant",
    office: "San Francisco",
    lastName: "Chandler",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena",
    position: "Office Manager",
    office: "London",
    lastName: "Gaines",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria",
    position: "Systems Administrator",
    office: "New York",
    lastName: "Little",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley",
    position: "Senior Marketing Designer",
    office: "London",
    lastName: "Kennedy",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione",
    position: "Regional Director",
    office: "London",
    lastName: "Butler",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Cedric",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    lastName: "Kelly",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde",
    position: "Regional Director",
    office: "San Francisco",
    lastName: "Marshall",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai",
    position: "Personnel Lead",
    office: "Edinburgh",
    lastName: "Rios",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris",
    position: "Sales Assistant",
    office: "Sidney",
    lastName: "Wilder",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    lastName: "Green",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Jennifer",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    lastName: "Acosta",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno",
    position: "Software Engineer",
    office: "London",
    lastName: "Nash",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar",
    position: "Pre-Sales Support",
    office: "New York",
    lastName: "Vance",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara",
    position: "Sales Assistant",
    office: "New York",
    lastName: "Stevens",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    lastName: "Kelly",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde",
    position: "Regional Director",
    office: "San Francisco",
    lastName: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana",
    position: "Accountant",
    office: "Tokyo",
    lastName: "Desai",
    date: "2008/11/28",
    salary: "$162,700",
  },
];

export const serverColumn: TableColumn<ServerSideProcessingColumnsInterface>[] =
  [
    {
      name: "First Name",
      selector: (row) => row.name,
      sortable: true,
      center: false,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      center: false,
    },
    {
      name: "position",
      selector: (row) => row.position,
      sortable: true,
      center: false,
    },
    {
      name: "office",
      selector: (row) => row.office,
      sortable: true,
      center: false,
    },
    {
      name: "Start Date",
      selector: (row) => row.date,
      sortable: true,
      center: false,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
      sortable: true,
      center: false,
    },
  ];
