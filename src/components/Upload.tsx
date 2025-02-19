import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  LinearProgress,
  TextField,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { KeyboardArrowDown, Check } from "@mui/icons-material";
import uploadMediaIcon from "../assets/upload_media.png";

import fileIcon from "../assets/file.svg";
import crossIcon from "../assets/x_close.png";
import deleteIcon from "../assets/delete.png";


interface UploadModalProps {
  open: boolean;
  onClose: () => void;
}

const UploadModal : React.FC<UploadModalProps>  = ({ open, onClose }) => {
  const files = [
    { name: "design requirements.pdf", size: "200 KB", uploaded: 100 },
    { name: "design requirements.pdf", size: "200 KB", uploaded: 100 },
    { name: "design requirements.pdf", size: "200 KB", uploaded: 100 },
    { name: "design requirements.jpg", size: "200 KB", uploaded: 70 },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          backdropFilter: "blur(5px)",
          backgroundColor: "#313131",
        },
        "& .MuiDialog-container": {
          backdropFilter: "blur(5px)",
        },
      }}
    >
      <DialogTitle className="text-white font-semibold text-lg">
        <div className="flex items-center justify-between">
          <p className="font-bold">Upload</p>
          <img
            onClick={onClose}
            className="cursor-pointer"
            src={crossIcon}
            alt=""
          />
        </div>
      </DialogTitle>
      <DialogContent
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        className="bg-[#313131] px-6 py-4"
      >
        <div className="text-white">Assets</div>
        <div className="text-gray-400 text-sm mb-4">
          Upload supporting media
        </div>
        {files.slice(0, 2).map((file, index) => (
          <div
            key={index}
            className="flex justify-between bg-[#3C3C3C] p-3 rounded-lg shadow-md mb-2"
          >
            <div className="flex gap-[4px]">
              <img className="w-[20px] h-[20px]" src={fileIcon} />
              <div className="flex flex-col gap-1">
                <p className="text-white text-sm font-medium">{file.name}</p>
                <p className="text-gray-400 text-xs">
                  {file.size} - 100% uploaded
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconButton className="text-gray-400 hover:text-red-500">
                <img className="w-[20px] h-[20px]" src={deleteIcon} />
              </IconButton>

              <Checkbox
                icon={
                  <div className="w-5 h-5 bg-[#FFFFFF0D] rounded-sm flex items-center justify-center" />
                }
                checkedIcon={
                  <div className="w-5 h-5 bg-[#FFFFFF0D] rounded-sm flex items-center justify-center">
                    <Check className="text-white" />{" "}
                  </div>
                }
                sx={{
                  padding: 0,
                  "& .MuiSvgIcon-root": {
                    fontSize: "1.25rem",
                  },
                }}
              />
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "#C05600",
              borderRadius: "8px",
              color: "#000",
            }}
            variant="contained"
            className="mt-2"
          >
            Add Asset
          </Button>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between bg-[#3C3C3C] p-3 rounded-lg shadow-md">
            <div className="flex gap-[4px]">
              <img className="h-[20px] w-[20px]" src={fileIcon}/>
              <div>
                <p className="text-white text-sm font-medium">
                  {files[2].name}
                </p>
                <p className="text-gray-400 text-xs">
                  {files[2].size} - {files[2].uploaded}% uploaded
                </p>
                {files[2].uploaded < 100 && (
                  <LinearProgress
                    variant="determinate"
                    value={files[2].uploaded}
                    className="mt-1"
                  />
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconButton className="text-gray-400 hover:text-red-500">
                <img className="h-[20px] w-[20px]" src={deleteIcon} />
              </IconButton>
              <Checkbox
                icon={
                  <div className="w-5 h-5 bg-[#FFFFFF0D] rounded-sm flex items-center justify-center" />
                }
                checkedIcon={
                  <div className="w-5 h-5 bg-[#FFFFFF0D] rounded-sm flex items-center justify-center">
                    <Check className="text-white" />{" "}
                  </div>
                }
                sx={{
                  padding: 0,
                  "& .MuiSvgIcon-root": {
                    fontSize: "1.25rem",
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div
            className="flex items-center justify-between p-3 rounded-lg shadow-md"
            style={{
              background: `linear-gradient(to right, #454545 ${files[3].uploaded}%, #3C3C3C ${files[3].uploaded}%)`,
            }}
          >
            <div className="flex gap-3">
              <img src={fileIcon} className="h-[20px] w-[20px]" />
              <div>
                <p className="text-white text-sm font-medium">
                  {files[3].name}
                </p>
                <p className="text-gray-400 text-xs">
                  {files[3].size} - {files[3].uploaded}% uploaded
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative size-10">
                <svg
                  className="size-full -rotate-90"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-white"
                    stroke-width="3"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-[#EF6C00] dark:text-[#EF6C00]"
                    stroke-width="3"
                    stroke-dasharray="100"
                    stroke-dashoffset="25"
                    stroke-linecap="round"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex gap-4">
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              className="bg-[#FFFFFF0D] text-white rounded-lg"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  color: "#FFFFFF66",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FFFFFF66",
                },
              }}
            />
            <TextField
              className="bg-[#FFFFFF0D] rounded-lg"
              select
              fullWidth
              variant="outlined"
              label="Select category"
              SelectProps={{
                IconComponent: KeyboardArrowDown,
              }}
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: "none",
                },
                "& .MuiInputLabel-root": {
                  color: "#FFFFFF66",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#FFFFFF66",
                },
              }}
            >
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
            </TextField>
          </div>
          <TextField
            fullWidth
            variant="outlined"
            label="Info"
            multiline
            rows={2}
            className="bg-[#FFFFFF0D] text-white rounded-lg"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "8px",
                border: "none",
              },
              "& .MuiInputLabel-root": {
                color: "#FFFFFF66",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#FFFFFF66",
              },
            }}
          />
        </div>

        <div className="mt-6">
          <button className="py-2 text-[16px] rounded-[8px] bg-[#C056001A] w-full text-white flex items-center justify-center border-1 border-[#C05600]">
            <img src={uploadMediaIcon} alt="Upload Icon" />
            Upload media
          </button>
        </div>
      </DialogContent>
      <DialogActions sx={{ padding: "20px 28px" }} className="bg-[#313131]">
        <div className="cursor-pointer text-gray-300 hover:text-white px-[10px] py-[7px] border-1 border-[#FFFFFF1A] rounded-[8px]">
          Cancel
        </div>
        <div className="bg-[#C05600] cursor-pointer text-gray-300 hover:text-white px-[10px] py-[7px] border-1 border-[#C05600] rounded-[8px]">
          Save
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default UploadModal;
