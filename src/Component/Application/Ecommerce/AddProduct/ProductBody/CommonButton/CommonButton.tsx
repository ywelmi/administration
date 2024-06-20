import { useDispatch } from "react-redux";
import { Btn, SVG } from "../../../../../../AbstractElements";
import { useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { Next, Previous, Submit } from "../../../../../../utils/Constant";
import { setNavId, setTabId } from "../../../../../../ReduxToolkit/Reducer/AddProductSlice";

const CommonButton = () => {
  const {navId,formValue,tabId} = useAppSelector((state) => state.addProduct)
  const dispatch = useDispatch()
  const handleFormValue = () => {
    if(formValue.userName !== ""){
      dispatch(setNavId(2))
    }
    if(formValue.fileName !== "" && formValue.fileName1 !== ""){
      dispatch(setNavId(3))
    }
    if(formValue.category !== "" && formValue.status !== ""){
      dispatch(setNavId(4))
    }
    if(formValue.initialCost !== "" && formValue.initialPrice !== "" && formValue.select !== "" && formValue.productStocks !== ""){
      dispatch(setNavId(5))
    }
    if(formValue.stock !== "" && formValue.lowStock !== "" && formValue.sku !== "" && formValue.quantity !== "" && formValue.restock !== "") {
      dispatch(setTabId(2))
    }
    if(formValue.additionalTag !== ""){
      dispatch(setTabId(3))
    }
  }
  const handlePrevious = () => {
    if(navId > 1){
      if(tabId > 1){
        dispatch(setTabId(tabId-1))
      }else{
        dispatch(setNavId(navId-1))
      }
    }
  }
  return (
    <div className="product-buttons">
      {navId > 1 &&
        <Btn onClick={()=>handlePrevious()}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SVG iconId="back-arrow"/>
            {Previous}
          </div>
        </Btn>
      }
      <Btn onClick={()=>handleFormValue()}>
        <div className="d-flex align-items-center gap-sm-2 gap-1">
          {tabId === 3 ? Submit : Next}
          <SVG iconId="front-arrow" />
        </div>
      </Btn>
    </div>
  );
};

export default CommonButton;
