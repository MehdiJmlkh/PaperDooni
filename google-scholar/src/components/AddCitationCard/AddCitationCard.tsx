import { useState } from "react";
import CheckBox from "../CheckBox";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import SimpleCard from "../SimpleCard";
import "./AddCitationCard.css";

const AddCitationCard = () => {
  const [page, setPage] = useState(1);
  return (
    <SimpleCard>
      <div className="add-citation__heading">Citations</div>
      <SearchBar />
      <div className="add-citation__articles">
        <CheckBox>Title</CheckBox>
        <CheckBox>Title</CheckBox>
        <CheckBox>Title</CheckBox>
        <CheckBox>Title</CheckBox>

        <Pagination
          totalPages={5}
          pageNumber={page}
          onClick={(next) => setPage(next)}
        />
      </div>
    </SimpleCard>
  );
};

export default AddCitationCard;
