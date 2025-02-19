import { SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import addIcon from "../assets/add_icon.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import ImagePlaceholder from "../assets/image_placeholder.png";
import Check from "@mui/icons-material/Check";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 900,
  minWidth: 320,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "#1e1e1e",
  borderRadius: "12px",
  boxShadow: "0px 1px 2px 0px #1018280D",
  p: 4,
};

const assets = new Array(20).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Meditation0${index + 1}`,
  type:
    index % 4 === 0
      ? "PDF"
      : index % 4 === 1
      ? "MP4"
      : index % 4 === 2
      ? "JPG"
      : "MOV",
  thumbnail: ImagePlaceholder,
}));

const filterMapping = {
  Images: ["JPG", "PNG", "JPEG"],
  Videos: ["MP4", "MOV"],
  PDFs: ["PDF"],
  MP4: ["MP4"],
};

export default function QuickSearch() {
  const [open, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Images");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSelectFilter = (filter: SetStateAction<string>) =>
    setSelectedFilter(filter);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

 const filteredAssets = assets.filter((asset) =>
   filterMapping[selectedFilter as keyof typeof filterMapping].includes(
     asset.type
   )
 );


  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          backgroundColor: "rgba(255, 255, 255, 0.05)!important",
          color: "#FFFFFF66",
          borderRadius: "8px",
          width: { xs: "100%", md: "auto" },
        }}
      >
        Quick Search
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg md:text-2xl font-bold text-white">
              Asset Quick Search
            </p>
            <CloseIcon
              className="text-white cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)!important",
                textTransform: "none",
                borderRadius: "8px",
              }}
              startIcon={<FilterListIcon />}
            >
              <span className="text-[#FFFFFF66]">Filters</span>
            </Button>
            <div className="flex gap-2 flex-wrap">
              {["Images", "Videos", "PDFs", "MP4"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleSelectFilter(filter)}
                  className={`cursor-pointer px-3 py-1 rounded text-sm ${
                    selectedFilter === filter
                      ? "bg-white text-black"
                      : "text-[#FFFFFF66]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {filteredAssets.map((asset) => (
              <div key={asset.id} className="relative">
                <div className="relative rounded-[6px] overflow-hidden">
                  <Checkbox
                    icon={
                      <div className="w-[20px] h-[20px] bg-transparent border-1 border-[#FFFFFF] rounded-[6px] flex items-center justify-center" />
                    }
                    checkedIcon={
                      <div className="w-[20px] h-[20px] bg-[#FFFFFF0D] rounded-sm flex items-center justify-center">
                        <Check className="text-white" />
                      </div>
                    }
                    sx={{
                      position: "absolute",
                      right: "6px",
                      padding: 0,
                      top: "5px",
                      height: "20px",
                      width: "20px",
                    }}
                  />
                  <img
                    src={asset.thumbnail}
                    alt={asset.name}
                    className="w-full rounded"
                  />
                  <span className="bg-white px-2 py-1 rounded text-xs absolute right-1 bottom-1">
                    {asset.type}
                  </span>
                </div>
                <div className="text-white text-sm mt-2 flex justify-between">
                  <span>{asset.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 gap-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex text-white px-3 py-2 items-center rounded-lg border border-[#FFFFFF1A]"
            >
              <img src={arrowLeft} alt="" /> <span>Previous</span>
            </button>
            <div className="flex items-center justify-center border border-[#FFFFFF1A] text-white text-lg h-[36px] w-[36px] rounded-lg">
              {currentPage}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex px-3 py-2 text-white items-center rounded-lg border border-[#FFFFFF1A]"
            >
              <span>Next</span> <img src={arrowRight} alt="" />
            </button>
          </div>
          <div className="flex justify-end mt-4">
            <button className="cursor-pointer flex items-center gap-2 bg-[#C05600] text-sm px-3 py-2 rounded-lg">
              <img src={addIcon} alt="" className="inline" /> Add to Challenge
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
