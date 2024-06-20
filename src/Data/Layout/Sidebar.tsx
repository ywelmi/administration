import { MenuItem } from "../../Types/Layout/Sidebar";

export const MenuList: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    Items: [
      {
        title: "Dashboards",
        id: 1,
        icon: "home",
        type: "sub",
        lanClass: "lan-3",
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/dashboard`,
            title: "Default",
            type: "link",
            lanClass: "lan-4",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/dashboard/ecommerce`,
            title: "Ecommerce",
            type: "link",
            lanClass: "lan-5",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/dashboard/onlinecourse`,
            title: "Online Course",
            type: "link",
          },
        ],
      },
      {
        title: "Widgets",
        id: 2,
        icon: "widget",
        type: "sub",
        lanClass: "lan-6",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/widgets/chart`,
            title: "Chart",
            type: "link",
          },
        ],
      },
      {
        title: "Page layout",
        id: 3,
        icon: "layout",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/pagelayout/hidenavscroll`,
            title: "Hide Nav Scroll",
            type: "link",
          },
        ],
      },
    ],
  },
  {
    title: "Applications",
    lanClass: "lan-8",
    Items: [
      {
        title: "Project",
        id: 3,
        icon: "project",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/project/projectlist`,
            type: "link",
            title: "Project-List",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/project/createnew`,
            type: "link",
            title: "Create New",
          },
        ],
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/filemanager`,
        icon: "file",
        title: "File Manager",
        type: "link",
      },
      {
        title: "Ecommerce",
        id: 6,
        icon: "ecommerce",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/addproduct`,
            title: "Add Products",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/products`,
            title: "Products",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/productpage`,
            title: "Product Page",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/productlist`,
            title: "Product List",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/paymentdetails`,
            title: "Payment Details",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/orderhistory`,
            title: "OrderHistory",
            type: "link",
          },
          {
            title: "Invoice",
            type: "sub",
            children: [
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice1`,
                title: "Invoice-1",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice2`,
                title: "Invoice-2",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice3`,
                title: "Invoice-3",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice4`,
                title: "Invoice-4",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice5`,
                title: "Invoice-5",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/invoice/invoice6`,
                title: "Invoice-6",
                type: "link",
              },
            ],
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/cart`,
            title: "Cart",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/wishlist`,
            title: "Wishlist",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/checkout`,
            title: "Checkout",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/ecommerce/pricing`,
            title: "Pricing",
            type: "link",
          },
        ],
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/email/letterbox`,
        icon: "email",
        title: "Letter Box",
        type: "link",
        id: 7,
      },
      {
        title: "Chat",
        id: 8,
        icon: "chat",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/chat/privatechats`,
            type: "link",
            title: "Private Chat",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/chat/groupchat`,
            type: "link",
            title: "Group Chat",
          },
        ],
      },
      {
        title: "Users",
        icon: "user",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/users/userprofile`,
            type: "link",
            title: "User Profile",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/users/useredit`,
            type: "link",
            title: "User Edit",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/users/cards`,
            type: "link",
            title: "User Cards",
          },
        ],
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/bookmark`,
        icon: "bookmark",
        type: "link",
        title: "Bookmark",
        id: 10,
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/contacts`,
        title: "Contact",
        icon: "contact",
        type: "link",
        id: 11,
        active: false,
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/task`,
        icon: "task",
        type: "link",
        title: "Task",
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/calendar`,
        icon: "calendar",
        type: "link",
        title: "Calendar",
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/socialapp`,
        icon: "social",
        type: "link",
        title: "Social App",
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/todo`,
        icon: "to-do",
        type: "link",
        title: "Todo",
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/app/searchresult`,
        icon: "search",
        type: "link",
        title: "Search Result",
      },
    ],
  },
  {
    title: "Forms & Table",
    Items: [
      {
        title: "Forms",
        id: 17,
        icon: "form",
        type: "sub",
        active: false,
        children: [
          {
            title: "Form Controls",
            type: "sub",
            children: [
              {
                title: "Form Validation",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/formvalidation`,
                bookmark: true,
              },
              {
                title: "Base Inputs",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/baseinput`,
              },
              {
                title: "Checkbox & Radio",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/radiocheckbox`,
              },
              {
                title: "Input Groups",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/inputgroups`,
              },
              {
                title: "Input Mask",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/inputmask`,
              },
              {
                title: "Mega Option",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formscontrols/megaoption`,
              },
            ],
          },
          {
            title: "Form Widget",
            type: "sub",
            children: [
              {
                title: "Datepicker",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/datepicker`,
              },
              {
                title: "Touchspin",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/touchspin`,
              },
              {
                title: "Switch",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/switch`,
              },
              {
                title: "Typeahead",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/typeahead`,
              },
              {
                title: "Clipboard",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formswidget/clipboard`,
              },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            children: [
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formslayout/formwizard1`,
                title: "Form Wizard 1",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formslayout/formwizard2`,
                title: "Form Wizard 2",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/forms/formslayout/twofactor`,
                title: "Two factor",
                type: "link",
              },
            ],
          },
        ],
      },

      {
        title: "Table",
        icon: "table",
        id: 18,
        type: "sub",
        children: [
          {
            title: "Bootstrap Tables",
            type: "sub",
            children: [
              {
                title: "Basic Tables",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/table/reactstraptable/basictable`,
              },
              {
                title: "Table Components",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/table/reactstraptable/tablecomponent`,
              },
            ],
          },
          {
            title: "Data Tables",
            type: "sub",
            children: [
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/basicinit`,
                title: "Basic Init",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/advanceinit`,
                title: "Advance Init",
                type: "link",
              },
              {
                path: `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/api`,
                title: "API",
                type: "link",
              },
              {
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/table/datatable/datasources`,
                title: "Data Source",
                type: "link",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Components",
    Items: [
      {
        title: "Ui-Kits",
        icon: "ui-kits",
        id: 19,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/typography`,
            title: "Typography",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/avatars`,
            title: "Avatars",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/helperclass`,
            title: "Helper Classes",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/grid`,
            title: "Grid",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/tagpills`,
            title: "Tag & Pills",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/progress`,
            title: "Progress",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/modal`,
            title: "Modal",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/alert`,
            title: "Alert",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/popover`,
            title: "Popover",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/tooltip`,
            title: "Tooltip",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/dropdown`,
            title: "Dropdown",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/accordion`,
            title: "Accordion",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/tabs`,
            title: "Tabs",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/uikits/list`,
            title: "Lists",
            type: "link",
          },
        ],
      },

      {
        title: "Bonus-Ui",
        icon: "bonus-kit",
        id: 20,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/scrollable`,
            title: "Scrollable",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/treeview`,
            title: "Tree View",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/toasts`,
            title: "Toasts",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/rating`,
            title: "Rating",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/dropzone`,
            title: "Dropzone",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/tour`,
            title: "Tour ",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/sweetalert2`,
            title: "SweetAlert2",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/owlcarousel`,
            title: "Owl Carousel",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/ribbons`,
            title: "Ribbons",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/pagination`,
            title: "Pagination",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/breadcrumb`,
            title: "Breadcrumb",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/rangeslider`,
            title: "RangeSlider",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/imagecropper`,
            title: "ImageCropper",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/basiccards`,
            title: "Basic Card",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/creativecards`,
            title: "Creative Card",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/bonusui/timeline`,
            title: "Timeline",
            type: "link",
          },
        ],
      },

      {
        title: "Icons",
        icon: "icons",
        id: 21,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/icons/flagicons`,
            title: "Flag Icon",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/icons/fontawesomeicon`,
            title: "Fontawesome Icon",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/icons/icoicon`,
            title: "Ico Icon",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/icons/themifyicon`,
            title: "Themify Icon",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/icons/feathericon`,
            title: "Feather Icon",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/icons/wheathericon`,
            title: "Weather Icon",
            type: "link",
          },
        ],
      },

      {
        title: "Buttons",
        icon: "button",
        id: 22,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/defaultstyle`,
            title: "Default Style",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/flatstyle`,
            title: "Flat Style",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/edgestyle`,
            title: "Edge Style",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/raisedstyle`,
            title: "Raised Style",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/buttons/buttongroup`,
            title: "Button Group",
            type: "link",
          },
        ],
      },

      {
        title: "Charts",
        icon: "charts",
        type: "sub",
        id: 23,
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/charts/apexchart`,
            type: "link",
            title: "Apex Chart",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/charts/googlechart`,
            type: "link",
            title: "Google Chart",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/charts/chartjschart`,
            type: "link",
            title: "Chartjs Chart",
          },
        ],
      },
    ],
  },
  {
    title: "Pages",
    Items: [
      {
        icon: "sample-page",
        id: 24,
        active: false,
        path: `${import.meta.env.VITE_PUBLIC_URL}/pages/samplepage`,
        title: "Sample Page",
        type: "link",
      },
      {
        title: "Others",
        icon: "others",
        id: 25,
        type: "sub",
        children: [
          {
            title: "Error Pages",
            type: "sub",
            children: [
              {
                title: "Error 400",
                type: "link",
                path: `${import.meta.env.VITE_PUBLIC_URL}/errors/error400`,
              },
              {
                title: "Error 401",
                type: "link",
                path: `${import.meta.env.VITE_PUBLIC_URL}/errors/error401`,
              },
              {
                title: "Error 403",
                type: "link",
                path: `${import.meta.env.VITE_PUBLIC_URL}/errors/error403`,
              },
              {
                title: "Error 404",
                type: "link",
                path: `${import.meta.env.VITE_PUBLIC_URL}/errors/error404`,
              },
              {
                title: "Error 500",
                type: "link",
                path: `${import.meta.env.VITE_PUBLIC_URL}/errors/error500`,
              },
              {
                title: "Error 503",
                type: "link",
                path: `${import.meta.env.VITE_PUBLIC_URL}/errors/error503`,
              },
            ],
          },
          {
            title: "Authentication",
            type: "sub",
            children: [
              {
                title: "Login Simple",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/loginsimple`,
              },
              {
                title: "Login with bg image",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/loginbgimage`,
              },
              {
                title: "Login with image two",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/loginwithimagetwo`,
              },
              {
                title: "Login with validation",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/loginvalidation`,
              },
              {
                title: "Login with tooltip",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/logintooltip`,
              },
              {
                title: "Login with sweetalert",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/loginsweetalert`,
              },
              {
                title: "Register Simple",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/registersimple`,
              },
              {
                title: "Register with Bg Image",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/registerbgimage`,
              },
              {
                title: "Register with Bg Two",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/registerwithimagetwo`,
              },
              {
                title: "Register Wizard",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/registerwizard`,
              },
              {
                title: "Unloack User",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/unlockuser`,
              },
              {
                title: "Forget Password",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/forgetpassword`,
              },
              {
                title: "Reset Password",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/resetpassword`,
              },
              {
                title: "Maintenance",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/authentication/maintenance`,
              },
            ],
          },
          {
            title: "Coming Soon",
            type: "sub",
            children: [
              {
                title: "Coming Simple",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/comingsoon/comingsoonsimple`,
              },
              {
                title: "Coming with Bg Video",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/comingsoon/comingbgvideo`,
              },
              {
                title: "Coming with bg Image",
                type: "link",
                path:
                  `${import.meta.env.VITE_PUBLIC_URL}/comingsoon/comingbgimg`,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Miscellaneous",
    Items: [
      {
        title: "Gallery",
        icon: "gallery",
        id: 26,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/gallerygrids`,
            title: "Gallery Grids",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/gallerygriddesc`,
            title: "Gallery Grid Desc",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/masonrygallery`,
            title: "Masonry Gallery",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/masonrywithdesc`,
            title: "Masonry With Desc",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/gallery/hovereffect`,
            title: "Hover Effect",
            type: "link",
          },
        ],
      },

      {
        title: "Blog",
        icon: "blog",
        id: 27,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/blog/blogdetails`,
            title: "Blog Details",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/blog/blogsingle`,
            title: "Blog Single",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/blog/addpost`,
            title: "Add Post",
            type: "link",
          },
        ],
      },
      {
        path: `${import.meta.env.VITE_PUBLIC_URL}/faq/faq`,
        icon: "faq",
        type: "link",
        active: false,
        title: "FAQ",
      },
      {
        title: "JobSearch",
        icon: "job-search",
        id: 28,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/cardview`,
            title: "Cards View",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/listview`,
            title: "List View",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/jobdetail`,
            title: "Job Detail",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/jobsearch/jobapply`,
            title: "Job Apply",
            type: "link",
          },
        ],
      },
      {
        title: "Learning",
        icon: "learning",
        id: 29,
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/learning/learninglist`,
            title: "Learning List",
            type: "link",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/learning/detailcourse`,
            title: "Detailed Course",
            type: "link",
          },
        ],
      },
      {
        title: "Map",
        icon: "maps",
        type: "sub",
        id: 30,
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/map/googlemap`,
            type: "link",
            title: "Google Map",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/map/leafletmap`,
            type: "link",
            title: "Leaflet Map",
          },
        ],
      },
      {
        title: "Editor",
        id: 31,
        icon: "editors",
        type: "sub",
        active: false,
        children: [
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/editor/ckeditor`,
            type: "link",
            title: "CK Editor",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/editor/mdeeditor`,
            type: "link",
            title: "MDE Editor",
          },
          {
            path: `${import.meta.env.VITE_PUBLIC_URL}/editor/aceeditor`,
            type: "link",
            title: "ACE Editor",
          },
        ],
      },

      {
        id: 32,
        path: `${import.meta.env.VITE_PUBLIC_URL}/knowledgebase/knowledgebase`,
        icon: "knowledgebase",
        type: "link",
        active: false,
        title: "Knowledgebase",
      },
      {
        id: 33,
        path: `${import.meta.env.VITE_PUBLIC_URL}/supportticket/supportticket`,
        icon: "support-tickets",
        type: "link",
        active: false,
        title: "SupportTicket",
      },
    ],
  },
];

