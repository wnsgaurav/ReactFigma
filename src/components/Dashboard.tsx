import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Pagination,
  PaginationItem,
  styled,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import FilterListIcon from "@mui/icons-material/FilterList";
import uploadIcon from "../assets/upload.png";
import UploadModal from "../components/Upload";
import avtar from "../assets/Avatar.png";
import visibilityIcon from "../assets/eye.png";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/trash.png";
import searchIcon from "../assets/search.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import QuickSearch from "./QuickSearch";
const generateRandomData = (count: number) => {
  const categories = ["Mind", "Body", "Fitness", "Hybrid"];
  const formats = ["MP4", "PDF", "Link", "JPG", "MP3"];
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Asset ${i + 1}`,
    info: `Description for asset ${i + 1}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    format: formats[Math.floor(Math.random() * formats.length)],
    size: `${(Math.random() * 5 + 1).toFixed(2)} MB`,
  }));
};

const assets = generateRandomData(45);

export default function AssetsDashboard() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [uploadModal, setUploadModal] = useState(false);
  const handleChange = (
    _event: React.MouseEvent<HTMLButtonElement>,
    value: number
  ) => {
    setPage(value);
  };

  const handleUploadModal = () => {
    setUploadModal(!uploadModal);
  };

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.info.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rowsPerPage = 10;
  const paginatedAssets = filteredAssets.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="w-3/4 ml-[50px] md:ml-0 grow-1 p-6 bg-[#1A1A1A] min-h-screen text-white ">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Assets</h1>
        <div className="flex gap-4">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C05600",
              textTransform: "none",
              borderRadius: "8px",
              padding: "10px 14px",
              color: "#000",
              fontSize: "0.875rem",
            }}
            startIcon={<img src={uploadIcon} className="w-5 h-5" />}
            onClick={handleUploadModal}
          >
            Upload
          </Button>
          <UploadModal open={uploadModal} onClose={handleUploadModal} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            textTransform: "none",
            borderRadius: "8px",
            fontSize: "0.875rem",
            padding: "8px 12px",
          }}
          startIcon={<FilterListIcon />}
        >
          <span className="text-[#FFFFFF66]">Filters</span>
        </Button>
        <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
          <QuickSearch />
          <div className="flex items-center bg-[#262626] px-4 py-2 rounded-md w-full md:w-auto">
            <img src={searchIcon} className="text-gray-400 mr-2 w-4 h-4" />
            <input
              type="text"
              placeholder="Search Name"
              className="bg-transparent border-none outline-none text-white w-full md:w-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Card sx={{ backgroundColor: "#ffffff1a", borderRadius: "10px" }}>
        <CardContent sx={{ padding: "0", paddingBottom: "0px !important" }}>
          <div className="overflow-x-auto">
            <TableContainer
              sx={{
                color: "white",
                minWidth: "800px",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="text-white">
                      <span className="border-2 border-[#FFFFFF1A] rounded-sm">
                        <Checkbox
                          icon={
                            <div className="w-[20px] h-[20px] bg-[#FFFFFF0D] rounded-sm flex items-center justify-center" />
                          }
                          checkedIcon={
                            <div className="w-[20px] h-[20px] bg-[#FFFFFF0D] rounded-sm flex items-center justify-center">
                              <Check className="text-white" />
                            </div>
                          }
                          sx={{
                            padding: 0,
                            "& .MuiSvgIcon-root": { fontSize: "1.25rem" },
                            height: "20px",
                            width: "20px",
                          }}
                        />
                      </span>
                    </TableCell>
                    <TableCell sx={{ color: "#FFFFFF66" }}>Name & ID</TableCell>
                    <TableCell sx={{ color: "#FFFFFF66" }}>Info</TableCell>
                    <TableCell sx={{ color: "#FFFFFF66" }}>Category</TableCell>
                    <TableCell sx={{ color: "#FFFFFF66" }}>Format</TableCell>
                    <TableCell sx={{ color: "#FFFFFF66" }}>Size</TableCell>
                    <TableCell sx={{ color: "#FFFFFF66" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedAssets.map((asset) => (
                    <TableRow
                      sx={{
                        color: "white",
                        "&:last-child td": { borderBottom: 0 },
                      }}
                      key={asset.id}
                      className="hover:bg-gray-700"
                    >
                      <TableCell>
                        <span className="border-2 border-[#FFFFFF1A] rounded-sm">
                          <Checkbox
                            icon={
                              <div className="w-[20px] h-[20px] bg-[#FFFFFF0D] rounded-sm flex items-center justify-center" />
                            }
                            checkedIcon={
                              <div className="w-[20px] h-[20px] bg-[#FFFFFF0D] rounded-sm flex items-center justify-center">
                                <Check className="text-white" />
                              </div>
                            }
                            sx={{
                              padding: 0,
                              "& .MuiSvgIcon-root": { fontSize: "1.25rem" },
                              height: "20px",
                              width: "20px",
                            }}
                          />
                        </span>
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        <div className="flex item-center">
                          <img src={avtar} alt="" />
                          <div className="ml-2">
                            <p className="font-[14px] font-[500]">
                              {asset.name}
                            </p>
                            <p className="font-[12px] text-[#FFFFFF66]">
                              #00000008
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        sx={{ color: "#FFFFFF66" }}
                        className="text-white"
                      >
                        {asset.info}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {asset.category}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {asset.format}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {asset.size}
                      </TableCell>
                      <TableCell>
                        <IconButton sx={{ color: "#FFFFFF66" }}>
                          <img src={visibilityIcon} />
                        </IconButton>
                        <IconButton sx={{ color: "#FFFFFF66" }}>
                          <img src={deleteIcon} />
                        </IconButton>
                        <IconButton sx={{ color: "#FFFFFF66" }}>
                          <img src={editIcon} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4 text-white">
        <StyledPagination
          count={10}
          page={page}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component="button"
              {...item}
              slots={{
                previous: () => (
                  <span className="flex items-center border-1 border-[#FFFFFF1A] px-[12px] py-1 text-white rounded-lg">
                    <img className="ml-[4px]" src={arrowLeft} /> Previous
                  </span>
                ),
                next: () => (
                  <span className="border-1 border-[#FFFFFF1A] flex items-center px-3 py-1 text-white rounded-lg">
                    Next <img className="ml-[4px]" src={arrowRight} />
                  </span>
                ),
              }}
            />
          )}
        />
      </div>
    </div>
  );
}

const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    color: "white",
    borderRadius: "8px",
  },
  "& .Mui-selected": {
    color: "white",
  },
  "& .MuiPaginationItem-ellipsis": {
    color: "white",
  },
});
