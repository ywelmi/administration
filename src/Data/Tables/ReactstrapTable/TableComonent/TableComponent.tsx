import {
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  UncontrolledDropdown,
} from "reactstrap";
import { Href } from "../../../../utils/Constant";
import {
  Alerts,
  Badges,
  Btn,
  P,
  Progressbar,
} from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import DismissibleAlerts from "../../../../Component/Tables/ReactstrapTable/TableComponent/Common/DismissibleAlerts";
import AlertsWithIcons from "../../../../Component/Tables/ReactstrapTable/TableComponent/Common/AlertsWithIcons";

export const uiComponentData = [
  {
    title: "Button",
    tableColData: <Btn color="primary">{"Default Button"}</Btn>,
    details: [
      {
        text: "Bootstrap includes six predefined button styles, each serving its own semantic purpose.",
      },
    ],
  },
  {
    title: "Round Buttons",
    tableColData: (
      <Btn color="primary" className="btn-pill">
        {"Default Button"}
      </Btn>
    ),
    details: [
      {
        text: "Use",
        code: ".btn-pill",
      },

      { text: " class to button for Round Buttons." },
    ],
  },
  {
    title: "Button dropdowns",
    tableColData: (
      <UncontrolledDropdown>
        <DropdownToggle color="primary" caret className="w-25">
          Primary
        </DropdownToggle>
        <DropdownMenu> 
          <DropdownItem header>Dropdown header</DropdownItem>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Separated link</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ),
    details: [
      {
        text: "Use",
        code: ".dropdown-toggle",
      },

      { text: "class to button for Dropdown-toggle." },
    ],
  },
  {
    title: "Basic Button group",
    tableColData: (
      <ButtonGroup>
        <Btn color="primary">Primary</Btn>
        <Btn color="secondary">Secondary</Btn>
        <Btn color="warning">Warning</Btn>
      </ButtonGroup>
    ),
    details: [
      {
        text: "Use",
        code: "btn-group",
      },

      {
        text: "class to button for",
        code: "div",
      },
      { text: "." },
    ],
  },
  {
    title: "Buttons with Icon",
    tableColData: (
      <Btn color="primary">
        <i className="fa fa-info-circle" /> Primary
      </Btn>
    ),
    details: [
      {
        text: "Bootstrap includes six predefined button styles, each serving its own semantic purpose.",
      },
    ],
  },
  {
    title: "Icon Button",
    tableColData: (
      <Btn color="primary">
        <i className="fa fa-camera" />
      </Btn>
    ),
    details: [
      {
        text: "Simple Icon Button",
      },
    ],
  },
  {
    title: "Loading Buttons",
    tableColData: (
      <Btn color="primary">
        <i className="fa fa-spin fa-spinner me-2" />
        Expand UP
      </Btn>
    ),
    details: [
      {
        text: "Expand Animation Buttons",
      },
    ],
  },
];

export const alertTableData = [
  {
    title: "Basic Alert",
    tableColData: (
      <Alerts color="primary">
        <P>
          <strong>Success!</strong> Indicates a successful or positive action.
        </P>
      </Alerts>
    ),
    details: [
      {
        text: "Alerts are available for any length of text, as well as an optional dismiss button. Add",
        code: "alert alert-primary",
      },
      {
        text: ",",
        code: "alert alert-secondary",
      },
      {
        text: ",",
        code: " alert alert-success",
      },
      {
        text: ",",
        code: "alert alert-info",
      },
      { text: "classes for alert with all theme colors." },
    ],
  },
  {
    title: "Alerts with Links",
    tableColData: (
      <Alerts color="primary">
        <P>
          <strong>Success!</strong> You should
          <Link className="alert-link txt-light" to={Href}> 
            {" "}
            read this message.
          </Link>
        </P>
      </Alerts>
    ),
    details: [
      {
        text: "Alerts are available for any length of text, as well as an optional dismiss button. Add",
        code: " alert alert-primary",
      },
      {
        text: ",",
        code: "alert alert-secondary",
      },
      {
        text: ",",
        code: " alert alert-success",
      },
      {
        text: ",",
        code: "alert alert-info",
      },
      { text: "classes for alert with all theme colors." },
    ],
  },
  {
    title: "Dismissible Alerts",
    tableColData: <DismissibleAlerts />,
    details: [
      {
        text: "Add a dismiss button and the",
        code: " alert alert-dismissable",
      },
      {
        text: "class, which adds extra padding to the right of the alert and positions the",
        code: "close",
      },
      {
        text: `a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the`,
        code: "a",
      },
      {
        text: "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.",
      },
    ],
  },
  {
    title: "Alerts with icons",
    tableColData: <AlertsWithIcons />,
    details: [
      {
        text: "Add a dismiss button and the",
        code: " alert alert-dismissable",
      },
      {
        text: "class, which adds extra padding to the right of the alert and positions the",
        code: "close",
      },
      {
        text: `a link On the dismiss button, add the data-bs-dismiss="alert" attribute, which triggers the JavaScript functionality. Be sure to use the`,
        code: "a",
      },
      {
        text: "element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the .fade and .in classes.",
      },
    ],
  },
];

export const progressTableData = [
  {
    title: "Default Progress",
    tableColData: <Progressbar color="primary" value={75} />,
    details: [
      {
        text: "Uses a progress bar with class",
        code: "progress-bar",
      },
      {
        text: "and background color",
        code: "bg-primary, bg-secondary",
      },
      {
        text: " also change",
      },
    ],
  },
  {
    title: "Striped Progress",
    tableColData: <Progressbar striped color="primary" value={75} />,
    details: [
      {
        text: "Uses a gradient to create a striped effect class.",
        code: "progress-bar-striped",
      },
    ],
  },
  {
    title: "Progress Sizes",
    tableColData: (
      <Progressbar color="primary" className="lg-progress-bar" value={75} />
    ),
    details: [
      {
        text: "Different sized progress. For Default progress, class need",
        code: "lg-progress-bar",
      },
      {
        text: "on div.",
      },
    ],
  },
];

export const checkBoxTableData = [
  {
    title: "Basic Checkbox",
    tableColData: (
      <>
        <Input id="checkbox1" type="checkbox" />
        <Label for="checkbox1">Default</Label>
      </>
    ),
    details: [
      {
        text: "Basic Checkbox",
      },
    ],
  },
  {
    title: "Default Checkbox Square",
    tableColData: (
      <div className="checkbox m-squar">
        <Input id="checkbox3" type="checkbox" />
        <Label for="checkbox3">Default</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: ".m-squar",
      },
      {
        text: " checkbox.",
      },
    ],
  },
  {
    title: "Basic Skin Check",
    tableColData: (
      <div className="checkbox checkbox-dark">
        <Input id="checkbox-state-dark" type="checkbox" />
        <Label for="checkbox-state-dark">Brand state</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "checkbox-dark",
      },
      { text: "for this style of checkbox." },
    ],
  },
  {
    title: "Flat Skin Check",
    tableColData: (
      <div className="checkbox checkbox-solid-primary">
        <Input id="solid6" type="checkbox" defaultChecked />
        <Label for="solid6">checked</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: `checkbox-solid-*`,
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
  {
    title: "Disable Check",
    tableColData: (
      <div className="checkbox checkbox-solid-primary">
        <Input id="solid2" type="checkbox" disabled />
        <Label for="solid2">Disabled</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "disabled",
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
  {
    title: "Inline  Checkbox",
    tableColData: (
      <FormGroup className="m-b-0 m-checkbox-inline">
        <div className="checkbox checkbox-primary">
          <Input id="inline-1" type="checkbox" />
          <Label for="inline-1">Option 1</Label>
        </div>
        <div className="checkbox checkbox-secondary">
          <Input id="inline-2" type="checkbox" />
          <Label for="inline-2">Option 1</Label>
        </div>
        <div className="checkbox checkbox-success">
          <Input id="inline-3" type="checkbox" />
          <Label for="inline-3">Option 1</Label>
        </div>
      </FormGroup>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "disabled",
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
];

export const radioBoxTableData = [
  {
    title: "Basic Radio Buttons",
    tableColData: (
      <>
        <Input id="radio" type="radio" />
        <Label for="radio">Default radio</Label>
      </>
    ),
    details: [
      {
        text: "Basic Radio Buttons",
      },
    ],
  },
  {
    title: "Default Radio",
    tableColData: (
      <div className="radio radio-primary">
        <Input id="radio1" type="radio" name="radio1" defaultValue="option1" />
        <Label for="radio1">Option 1</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: ".radio-*",
      },
      {
        text: " and color ",
        code: ".radio-*",
      },
      { code: "primary , secondary , success , info" },
      { text: "on Radio." },
    ],
  },
  {
    title: "Checked Radio",
    tableColData: (
      <div className="radio radio-primary">
        <Input
          id="radio44"
          type="radio"
          name="radio1"
          defaultValue="option1"
          defaultChecked
        />
        <Label for="radio44">Checked</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "checkbox-dark",
      },
      { text: "for this style of checkbox." },
    ],
  },
  {
    title: "Flat Skin Check",
    tableColData: (
      <div className="radio radio-primary">
        <Input
          id="radio33"
          type="radio"
          name="radio1"
          defaultValue="option1"
          disabled
        />
        <Label for="radio33">Disabled</Label>
      </div>
    ),
    details: [
      {
        text: "Wrap with use",
        code: `checkbox-solid-*`,
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
  {
    title: "Inline  Checkbox",
    tableColData: (
      <FormGroup className="m-b-0 m-checkbox-inline">
        <div className="radio radio-primary">
          <Input
            id="radioinline1"
            type="radio"
            name="radio1"
            defaultValue="option1"
          />
          <Label for="radioinline1">Option 1</Label>
        </div>
        <div className="radio radio-secondary">
          <Input
            id="radioinline2"
            type="radio"
            name="radio1"
            defaultValue="option1"
          />
          <Label for="radioinline2">Option 1</Label>
        </div>
        <div className="radio radio-success">
          <Input
            id="radioinline3"
            type="radio"
            name="radio1"
            defaultValue="option1"
          />
          <Label for="radioinline3">Option 1</Label>
        </div>
      </FormGroup>
    ),
    details: [
      {
        text: "Wrap with use",
        code: "disabled",
      },
      {
        text: ",",
        code: "primary, secondary, success, info, warning, danger",
      },
      {
        text: "for this style of checkbox.",
      },
    ],
  },
];

export const selectBoxTableData = [
  {
    title: "Single Select",
    tableColData: (
      <Input type="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    ),
    details: [
      {
        text: "Use for basic select control.",
      },
    ],
  },
  {
    title: "Disabled Select Mode",
    tableColData: (
      <Input type="select" disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    ),
    details: [
      {
        text: "Use for disabled select control add ",
        code: "disabled",
      },
      {
        text: ".",
      },
    ],
  },
  {
    title: "Large Select Mode",
    tableColData: (
      <>
        <Input type="select" className="form-control-lg mb-10">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <Input type="select" className="form-control-sm mt-5 mb-10">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </>
    ),
    details: [
      {
        text: "Use for large and small select control add class",
        code: "form-control-*",
      },
      {
        code: "lg, sm",
      },
      {
        text: ".",
      },
    ],
  },
  {
    title: "Example multiple select",
    tableColData: (
      <Input type="select" className="custom-scrollbar" multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Input>
    ),
    details: [
      {
        text: "Use for multi select control add code ",
        code: "multiple",
      },
      {
        text: "on select.",
      },
    ],
  },
];

export const inputTableData = [
  {
    title: "Default Input text",
    tableColData: (
      <Input className="input-primary" type="email" placeholder="Input text" />
    ),
    details: [
      {
        text: "Use for basic select control.",
      },
    ],
  },
  {
    title: "Input Hover Color ",
    tableColData: <Input type="email" placeholder="Input text" />,
    details: [
      {
        text: "Use for basic input color add class",
        code: "input-air-*",
      },
      {
        code: "primary, secondary, success, info",
      },
      {
        text: ".on input",
      },
    ],
  },
];

export const badgeTableData = [
  {
    title: "Basic Pills",
    tdClassName: "pills-component",
    tableColData: <Badges color="primary">Primary</Badges>,
    details: [
      {
        text: "Use the",
        code: ".badge",
      },
      {
        text: " class, followed by. with badge color use class ",
        code: ".badge-*",
      },
      {
        code: "primary , secondary , success , info, warning, danger, light",
      },
      { text: "  class within element to create default pill." },
    ],
  },
  {
    title: "Label With Icon",
    tableColData: (
      <Badges color="primary" className="label-square">
        <i className="fa fa-paperclip fa-lg"></i>
        <span className="f-14">Primary Label</span>
      </Badges>
    ),
    details: [
      {
        text: "Use the",
        code: "label-square",
      },
      {
        code: "div",
        text: " class with ",
      },
    ],
  },
];

export const tooltipTableData = [
  {
    title: "Hover",
    tableColData: (
      <Btn
        color="primary"
        data-original-title="btn btn-link btn-lg"
        title="Hover"
      >
        Primary
      </Btn>
    ),
    details: [
      {
        text: `Use data-bs-toggle="tooltip" for hover trigger. This is a default trigger`,
      },
    ],
  },
  {
    title: "Link",
    tableColData: (
      <Link className="btn btn-primary" to={Href}>
        Link
      </Link>
    ),
    details: [
      {
        text: "Use the",
        code: "label-square",
      },
      {
        code: "div",
        text: " class with ",
      },
    ],
  },
  {
    title: "outline button",
    tableColData: (
      <Btn outline color="primary">
        Primary
      </Btn>
    ),
    details: [
      {
        text: "Use ",
        code: "btn btn-outline-info",
      },
      {
        code: "btn btn-outline-dark-2x",
        text: " for outline trigger. and button bold Border use class",
      },
    ],
  },
];

export const switchTableData = [
  {
    title: "Default Switch",
    tdClassName: "pills-component",
    tableColData: (
      <Label className="switch">
        <Input type="checkbox" defaultChecked />
        <span className="switch-state" />
      </Label>
    ),
    details: [
      {
        text: `Use class `,
        code: `switch`,
      },
      {
        text: " for label.",
      },
    ],
  },
  {
    title: "Disable Switch",
    tableColData: (
      <Label className="switch">
        <Input type="checkbox" disabled />
        <span className="switch-state" />
      </Label>
    ),
    details: [
      {
        text: "this Disable Switch ",
        code: "disabled",
      },
    ],
  },
  {
    title: "Switch Color",
    tableColData: (
      <div className="flex-grow-1 icon-state">
        <Label className="switch">
          <Input type="checkbox" defaultChecked />
          <span className="switch-state bg-primary" />
        </Label>
      </div>
    ),
    details: [
      {
        text: "Use class",
        code: "bg-*",
      },
      {
        code: "Primary , Secondary , Success , Info , Warning , Danger",
      },
      {
        text: "in span with icon show switch ",
        code: "icon-state",
      },
      {
        text: "on div.",
      },
    ],
  },
  {
    title: "Switch Outline",
    tableColData: (
      <div className="flex-grow-1 icon-state switch-outline">
        <Label className="switch">
          <Input type="checkbox" defaultChecked />
          <span className="switch-state bg-primary" />
        </Label>
      </div>
    ),
    details: [
      {
        text: "Use  class  ",
        code: "switch-outline",
      },
      {
        text: "on div.",
      },
    ],
  },
];
