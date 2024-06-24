import Default from "../Pages/Dashboard/Default/Default";
import { ListUser } from "../Pages/User/ListUser";
// import ApexChart from "../Pages/Charts/Apexchart/ApexChart";
// import ChartJs from "../Pages/Charts/ChartJs/ChartJs";
// import GoogleChart from "../Pages/Charts/GoogleChart/GoogleChart";
// import ButtonGroup from "../Pages/Buttons/ButtonGroup/ButtonGroup";
// import DefaultStyle from "../Pages/Buttons/DefaultStyle/DefaultStyle";
// import EdgeStyle from "../Pages/Buttons/EdgeStyle/EdgeStyle";
// import FlatStyle from "../Pages/Buttons/FlatStyle/FlatStyle";
// import RaisedStyle from "../Pages/Buttons/RaisedStyle/RaisedStyle";
// import Timeline from "../Pages/BonusUi/Timeline/Timeline";
// import BasicCard from "../Pages/BonusUi/BasicCard/BasicCard";
// import CreativeCard from "../Pages/BonusUi/CreativeCard/CreativeCard";
// import ImageCropper from "../Pages/BonusUi/ImageCropper/ImageCropper";
// import RangeSlider from "../Pages/BonusUi/RangeSlider/RangeSlider";
// import OwlCarousel from "../Pages/BonusUi/OwlCarousel/OwlCarousel";
// import Ribbons from "../Pages/BonusUi/Ribbons/Ribbons";
// import Pagination from "../Pages/BonusUi/SweetAlert/Paginations/Paginations";
// import SweetAlert from "../Pages/BonusUi/SweetAlert/SweetAlert";
// import Dropzone from "../Pages/BonusUi/Dropzone/Dropzone";
// import Tour from "../Pages/BonusUi/Tour/Tour";
// import Rating from "../Pages/BonusUi/Rating/Rating";
// import Toast from "../Pages/BonusUi/Toast/Toast";
// import Breadcrumb from "../Pages/BonusUi/Breadcrumb/Breadcrumb";
// import Scrollable from "../Pages/BonusUi/Scrollable/Scrollable";
// import TreeView from "../Pages/BonusUi/TreeView/TreeView";
// import Ecommerce from "../Pages/Dashboard/Ecommerce/Ecommerce";
// import Charts from "../Pages/Widgets/Charts/Charts";
// import General from "../Pages/Widgets/General/General";
// import OnlineCourse from "../Pages/Dashboard/OnlineCourse/OnlineCourse";
// import DatePicker from "../Pages/Forms/FormsWidgets/DatePicker/DatePicker";
// import TouchSpin from "../Pages/Forms/FormsWidgets/TouchSpin/TouchSpin";
// import MegaOption from "../Pages/Forms/FormsControl/MegaOption/MegaOption";
// import InputGroup from "../Pages/Forms/FormsControl/InputGroup/InputGroup";
// import InputMask from "../Pages/Forms/FormsControl/InputMask/InputMask";
// import RadioCheckbox from "../Pages/Forms/FormsControl/RadioCheckbox/RadioCheckbox";
// import BaseInput from "../Pages/Forms/FormsControl/BaseInput/BaseInput";
// import FormsValidation from "../Pages/Forms/FormsControl/FormsValidation/FormsValidation";
// import AceEditor from "../Pages/Miscellaneous/Editor/AceEditor/AceEditor";
// import CkEditor from "../Pages/Miscellaneous/Editor/CkEditor/CkEditor";
// import MdeEditor from "../Pages/Miscellaneous/Editor/MdeEditor/MdeEditor";
// import GoogleMap from "../Pages/Miscellaneous/Maps/GoogleMap/GoogleMap";
// import LeafletMaps from "../Pages/Miscellaneous/Maps/LeafletMaps/LeafletMaps";
// import DetailsCourse from "../Pages/Miscellaneous/Learning/DetailsCourse/DetailsCourse";
// import LearningList from "../Pages/Miscellaneous/Learning/LearningList/LearningList";
// import CardView from "../Pages/Miscellaneous/JobSearch/CardView/CardView";
// import JobApply from "../Pages/Miscellaneous/JobSearch/JobApply/JobApply";
// import JobDetails from "../Pages/Miscellaneous/JobSearch/JobDetails/JobDetails";
// import ListView from "../Pages/Miscellaneous/JobSearch/ListView/ListView";
// import Faq from "../Pages/Miscellaneous/Faq/Faq";
// import Knowledgebase from "../Pages/Miscellaneous/Knowledgebase/Knowledgebase";
// import SupportTicket from "../Pages/Miscellaneous/SupportTicket/SupportTicket";
// import AddPost from "../Pages/Miscellaneous/Blog/AddPost/AddPost";
// import BlogDetails from "../Pages/Miscellaneous/Blog/BlogDetails/BlogDetails";
// import BlogSingle from "../Pages/Miscellaneous/Blog/BlogSingle/BlogSingle";
// import GalleryGrid from "../Pages/Miscellaneous/Gallery/GalleryGrid/GalleryGrid";
// import GalleryGridDesc from "../Pages/Miscellaneous/Gallery/GalleryGridDesc/GalleryGridDesc";
// import HoverEffect from "../Pages/Miscellaneous/Gallery/HoverEffect/HoverEffect";
// import MasonryGallery from "../Pages/Miscellaneous/Gallery/MasonryGallery/MasonryGallery";
// import MasonryImageDesc from "../Pages/Miscellaneous/Gallery/MasonryImageDesc/MasonryImageDesc";
// import FeatherIcons from "../Pages/Icons/FeatherIcons";
// import FlagIcons from "../Pages/Icons/FlagIcons";
// import FontAwesomeIcon from "../Pages/Icons/FontAwesomeIcon";
// import ICOIcon from "../Pages/Icons/ICOIcon";
// import ThemifyIcons from "../Pages/Icons/ThemifyIcons";
// import WhetherIcon from "../Pages/Icons/WhetherIcons";
// import Lists from "../Pages/Ui-Kits/Lists/Lists";
// import ReactstrapTabs from "../Pages/Ui-Kits/Tabs/ReactstrapTabs";
// import Accordion from "../Pages/Ui-Kits/Accordion/Accordion";
// import Dropdown from "../Pages/Ui-Kits/Dropdown/Dropdown";
// import Popover from "../Pages/Ui-Kits/Popover/Popover";
// import Tooltip from "../Pages/Ui-Kits/Tooltip/Tooltip";
// import Modal from "../Pages/Ui-Kits/Modal/Modal";
// import Alert from "../Pages/Ui-Kits/Alert/Alert";
// import Progress from "../Pages/Ui-Kits/Progress/Progress";
// import Grid from "../Pages/Ui-Kits/Grid/Grid";
// import TagAndPills from "../Pages/Ui-Kits/TagAndPills/TagAndPills";
// import HelperClasses from "../Pages/Ui-Kits/HelperClasses/HelperClasses";
// import Avatars from "../Pages/Ui-Kits/Avatars";
// import Typography from "../Pages/Ui-Kits/Typography";
// import HideNavScrollContainer from "../Pages/PageLayout/HideNavScrollContainer/HideNavScrollContainer";
// import FormWizardOne from "../Pages/Forms/FormsLayout/FormWizardOne/FormWizardOne";
// import FormWizardTwo from "../Pages/Forms/FormsLayout/FormWizardTwo/FormWizardTwo";
// import TwoFactor from "../Pages/Forms/FormsLayout/TwoFactor/TwoFactor";
// import ClipBoard from "../Pages/Forms/FormsWidgets/ClipBoard/ClipBoard";
// import Switch from "../Pages/Forms/FormsWidgets/Switch/Switch";
// import Typeahead from "../Pages/Forms/FormsWidgets/Typeahead/Typeahead";
// import AdvanceInit from "../Pages/Tables/DataTables/AdvanceInit/AdvanceInit";
// import ApiDataTable from "../Pages/Tables/DataTables/ApiDataTable/ApiDataTable";
// import BasicInit from "../Pages/Tables/DataTables/BasicInit/BasicInit";
// import DataSource from "../Pages/Tables/DataTables/DataSource/DataSource";
// import BasicTable from "../Pages/Tables/ReactstrapTable/BasicTable/BasicTable";
// import TableComponent from "../Pages/Tables/ReactstrapTable/TableComponent/TableComponent";
// import SamplePage from "../Pages/SamplePage/SamplePage";
// import ProjectList from "../Pages/Application/Project/ProjectList/ProjectList";
// import ProjectCreate from "../Pages/Application/Project/ProjectCreate/ProjectCreate";
// import FileManager from "../Pages/Application/FileManager/FileManager";
// import LetterBox from "../Pages/Application/LetterBox/LetterBox";
// import UsersProfile from "../Pages/Application/Users/UsersProfile/UsersProfile";
// import EditProfile from "../Pages/Application/Users/EditProfile/EditProfile";
// import UserCards from "../Pages/Application/Users/UserCards/UserCards";
// import Todo from "../Pages/Application/Todo/Todo";
// import Calender from "../Pages/Application/Calender/Calender";
// import Tasks from "../Pages/Application/Tasks/Tasks";
// import Contacts from "../Pages/Application/Contacts/Contacts";
// import Bookmark from "../Pages/Application/Bookmark/Bookmark";
// import SearchResult from "../Pages/Application/SearchResult/SearchResult";
// import PrivateChat from "../Pages/Application/Chat/PrivateChat/PrivateChat";
// import GroupChat from "../Pages/Application/Chat/GroupChat/GroupChat";
// import SocialApp from "../Pages/Application/SocialApp/SocialApp";
// import Pricing from "../Pages/Application/Ecommerce/Pricing/Pricing";
// import WishList from "../Pages/Application/Ecommerce/WishList/WishList";
// import OrderHistory from "../Pages/Application/Ecommerce/OrderHistory/OrderHistory";
// import ProductPage from "../Pages/Application/Ecommerce/ProductPage/ProductPage";
// import PaymentDetails from "../Pages/Application/Ecommerce/PaymentDetails/PaymentDetails";
// import ProductList from "../Pages/Application/Ecommerce/ProductList/ProductList";
// import AddProduct from "../Pages/Application/Ecommerce/AddProduct/AddProduct";
// import Products from "../Pages/Application/Ecommerce/Products/Products";
// import Cart from "../Pages/Application/Ecommerce/Cart/Cart";
// import Checkout from "../Pages/Application/Ecommerce/Checkout/Checkout";
// import InvoiceOne from "../Pages/Application/Ecommerce/Invoices/Invoice-1/Invoice-1";
// import InvoiceTwo from "../Pages/Application/Ecommerce/Invoices/Invoice-2/Invoice-2";
// import InvoiceThree from "../Pages/Application/Ecommerce/Invoices/Invoice-3/Invoice-3";
// import InvoiceFour from "../Pages/Application/Ecommerce/Invoices/Invoice-4/Invoice-4";
// import InvoiceFive from "../Pages/Application/Ecommerce/Invoices/Invoice-5/Invoice-5";
// import InvoiceSix from "../Pages/Application/Ecommerce/Invoices/Invoice-6/Invoice-6";

const Routes = [
  {
    path: "/dashboard",
    Component: <Default />,
  },
  {
    path: "/user/list",
    Component: <ListUser />,
  },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/dashboard/ecommerce`,
  //   Component: <Ecommerce />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/dashboard/onlinecourse`,
  //   Component: <OnlineCourse />,
  // },
  //
  // // Forms Widgets
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/datepicker`,
  //   Component: <DatePicker />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/touchspin`,
  //   Component: <TouchSpin />,
  // },
  //
  // // Form Controls
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/megaoption`,
  //   Component: <MegaOption />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/inputgroups`,
  //   Component: <InputGroup />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/inputmask`,
  //   Component: <InputMask />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/radiocheckbox`,
  //   Component: <RadioCheckbox />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/formvalidation`,
  //   Component: <FormsValidation />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/baseinput`,
  //   Component: <BaseInput />,
  // },
  //
  // // Maps
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/map/googlemap`, Component: <GoogleMap /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/map/leafletmap`,
  //   Component: <LeafletMaps />,
  // },
  //
  // // Editors
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/editor/ckeditor`,
  //   Component: <CkEditor />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/editor/mdeeditor`,
  //   Component: <MdeEditor />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/editor/aceeditor`,
  //   Component: <AceEditor />,
  // },
  //
  // // Learning
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/learning/learninglist`,
  //   Component: <LearningList />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/learning/detailcourse`,
  //   Component: <DetailsCourse />,
  // },
  //
  // // Job Search
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/cardview`,
  //   Component: <CardView />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/listview`,
  //   Component: <ListView />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/jobdetail`,
  //   Component: <JobDetails />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/jobapply`,
  //   Component: <JobApply />,
  // },
  //
  // // Faq
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/faq/faq`, Component: <Faq /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/knowledgebase/knowledgebase`,
  //   Component: <Knowledgebase />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/supportticket/supportticket`,
  //   Component: <SupportTicket />,
  // },
  //
  // // Blog
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/blog/blogdetails`,
  //   Component: <BlogDetails />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/blog/blogsingle`,
  //   Component: <BlogSingle />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/blog/addpost`, Component: <AddPost /> },
  //
  // // Gallery
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/gallerygrids`,
  //   Component: <GalleryGrid />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/gallerygriddesc`,
  //   Component: <GalleryGridDesc />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/masonrygallery`,
  //   Component: <MasonryGallery />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/masonrywithdesc`,
  //   Component: <MasonryImageDesc />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/hovereffect`,
  //   Component: <HoverEffect />,
  // },
  //
  // // Charts
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/charts/apexchart`,
  //   Component: <ApexChart />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/charts/googlechart`,
  //   Component: <GoogleChart />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/charts/chartjschart`,
  //   Component: <ChartJs />,
  // },
  //
  // // Buttons
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/defaultstyle`,
  //   Component: <DefaultStyle />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/flatstyle`,
  //   Component: <FlatStyle />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/edgestyle`,
  //   Component: <EdgeStyle />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/raisedstyle`,
  //   Component: <RaisedStyle />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/buttongroup`,
  //   Component: <ButtonGroup />,
  // },
  //
  // // Icons
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/icons/flagicons`,
  //   Component: <FlagIcons />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/icons/fontawesomeicon`,
  //   Component: <FontAwesomeIcon />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/icons/icoicon`, Component: <ICOIcon /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/icons/themifyicon`,
  //   Component: <ThemifyIcons />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/icons/feathericon`,
  //   Component: <FeatherIcons />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/icons/wheathericon`,
  //   Component: <WhetherIcon />,
  // },
  //
  // // Bonus Ui
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/timeline`,
  //   Component: <Timeline />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/basiccards`,
  //   Component: <BasicCard />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/creativecards`,
  //   Component: <CreativeCard />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/rangeslider`,
  //   Component: <RangeSlider />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/imagecropper`,
  //   Component: <ImageCropper />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/owlcarousel`,
  //   Component: <OwlCarousel />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/ribbons`, Component: <Ribbons /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/sweetalert2`,
  //   Component: <SweetAlert />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/pagination`,
  //   Component: <Pagination />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/dropzone`,
  //   Component: <Dropzone />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/tour`, Component: <Tour /> },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/toasts`, Component: <Toast /> },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/rating`, Component: <Rating /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/scrollable`,
  //   Component: <Scrollable />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/treeview`,
  //   Component: <TreeView />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/breadcrumb`,
  //   Component: <Breadcrumb />,
  // },
  //
  // // Ui-Kits
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/tabs`,
  //   Component: <ReactstrapTabs />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/list`, Component: <Lists /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/accordion`,
  //   Component: <Accordion />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/helperclass`,
  //   Component: <HelperClasses />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/typography`,
  //   Component: <Typography />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/avatars`, Component: <Avatars /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/dropdown`,
  //   Component: <Dropdown />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/popover`, Component: <Popover /> },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/tooltip`, Component: <Tooltip /> },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/modal`, Component: <Modal /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/progress`,
  //   Component: <Progress />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/alert`, Component: <Alert /> },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/grid`, Component: <Grid /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/tagpills`,
  //   Component: <TagAndPills />,
  // },
  //
  // // Page Layout
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/pagelayout/hidenavscroll`,
  //   Component: <HideNavScrollContainer />,
  // },
  //
  // // Widgets
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/widgets/general`, Component: <General /> },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/widgets/chart`, Component: <Charts /> },
  //
  // // Form Widgets
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/switch`,
  //   Component: <Switch />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/typeahead`,
  //   Component: <Typeahead />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/clipboard`,
  //   Component: <ClipBoard />,
  // },
  //
  // // Form Layout
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formslayout/formwizard1`,
  //   Component: <FormWizardOne />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formslayout/formwizard2`,
  //   Component: <FormWizardTwo />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/forms/formslayout/twofactor`,
  //   Component: <TwoFactor />,
  // },
  //
  // // Tables
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/table/reactstraptable/basictable`,
  //   Component: <BasicTable />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/table/reactstraptable/tablecomponent`,
  //   Component: <TableComponent />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/basicinit`,
  //   Component: <BasicInit />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/advanceinit`,
  //   Component: <AdvanceInit />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/api`,
  //   Component: <ApiDataTable />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/datasources`,
  //   Component: <DataSource />,
  // },
  //
  // // Sample Page
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/pages/samplepage`,
  //   Component: <SamplePage />,
  // },
  //
  // // Applications
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/project/projectlist`,
  //   Component: <ProjectList />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/project/createnew`,
  //   Component: <ProjectCreate />,
  // },
  //
  // // FileManager
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/app/filemanager`,
  //   Component: <FileManager />,
  // },
  //
  // // Email
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/email/letterbox`,
  //   Component: <LetterBox />,
  // },
  //
  // // Users
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/users/userprofile`,
  //   Component: <UsersProfile />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/users/useredit`,
  //   Component: <EditProfile />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/users/cards`, Component: <UserCards /> },
  //
  // // Todo
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/app/todo`, Component: <Todo /> },
  //
  // // Calender
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/app/calendar`, Component: <Calender /> },
  //
  // // Tasks
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/app/task`, Component: <Tasks /> },
  //
  // // Contacts
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/app/contacts`, Component: <Contacts /> },
  //
  // // Bookmark
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/app/bookmark`, Component: <Bookmark /> },
  //
  // // Search Result
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/app/searchresult`,
  //   Component: <SearchResult />,
  // },
  //
  // // Chat
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/chat/privatechats`,
  //   Component: <PrivateChat />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/chat/groupchat`,
  //   Component: <GroupChat />,
  // },
  //
  // // Social App
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/app/socialapp`, Component: <SocialApp /> },
  //
  // // Ecommerce
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/addproduct`,
  //   Component: <AddProduct />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/products`,
  //   Component: <Products />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/productlist`,
  //   Component: <ProductList />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/paymentdetails`,
  //   Component: <PaymentDetails />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/productpage`,
  //   Component: <ProductPage />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/orderhistory`,
  //   Component: <OrderHistory />,
  // },
  //
  // // Invoices
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice1`,
  //   Component: <InvoiceOne />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice2`,
  //   Component: <InvoiceTwo />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice3`,
  //   Component: <InvoiceThree />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice4`,
  //   Component: <InvoiceFour />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice5`,
  //   Component: <InvoiceFive />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice6`,
  //   Component: <InvoiceSix />,
  // },
  // { path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/cart`, Component: <Cart /> },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/wishlist`,
  //   Component: <WishList />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/checkout`,
  //   Component: <Checkout />,
  // },
  // {
  //   path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/pricing`,
  //   Component: <Pricing />,
  // },
];

export default Routes;
