import { useForm } from "react-hook-form";
import "./SearchBar.css";

interface Props {
  onSubmit: (searchText: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const { register, getValues } = useForm();

  return (
    <input
      {...register("searchText")}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onSubmit(getValues("searchText"));
        }
      }}
      className="form-control search-bar"
      placeholder="Search papers..."
    />
  );
};

export default SearchBar;
