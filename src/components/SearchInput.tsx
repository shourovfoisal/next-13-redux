import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const SearchInput = () => {

  const dispatch = useAppDispatch();
  const search = useAppSelector(state => state.search.search);

  return (
    <div>
        <input 
          type="text" 
          value={search} 
          onChange={(e) => dispatch(setSearch(e.target.value))} 
        />
    </div>
  )
}