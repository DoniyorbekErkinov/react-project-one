import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import YTSearch from "youtube-api-search";
import apiService from "../../Services/ApiService";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 25,
}));
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  padding: theme.spacing(1),
}));
function AddVIdeos(props) {
  const API_KEY = "AIzaSyBeODchoiFuWhEv-ieUZd8BNSRzvJ8AL4Y";
  const [videos, setVideos] = React.useState([]);
  const [list, setList] = React.useState("");
  const [search, setSearch] = React.useState("");
    const [form, setForm] = React.useState({ id: "", name: "", link: "" });

  function searchVideos(search) {
    if (search) {
      YTSearch({ key: API_KEY, term: search, maxResults: 25 }, (res) => {
          setVideos(res);
      });
    }
  }
  let navigate = useNavigate();
  function create() {
    getList();
      setForm({ ...setForm, id: list + 1 });
    if (form.name) {
      apiService.create(form).then(res => {
        navigate('/videos');
      })
    }
  }
  function getList() {
    apiService.getList().then((res) => {
      setList(res.data.length);
      console.log("list", list);
    });
  }

  React.useEffect(() => {
    getList();
  }, []);

  return (
    <Box>
      <Box
        style={{
          width: 600,
          margin: "0 auto",
          border: "2px solid #fff",
          marginTop: 15,
          borderRadius: 15,
        }}>
        <Box>
          <Div>{"Add New Videos To Your List"}</Div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", p: "10px" }}>
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            placeholder="Name"
            style={{
              padding: 15,
              width: "100%",
              border: "none",
              height: 40,
              borderRadius: 15,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", p: "10px" }}>
          <input
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            placeholder="Paste url"
            style={{
              padding: 15,
              width: "100%",
              border: "none",
              height: 40,
              borderRadius: 15,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", p: "10px" }}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search from YouTube"
            style={{
              padding: 15,
              width: "95%",
              border: "none",
              height: 40,
              borderRadius: 15,
            }}
          />
          <button
            onClick={() => searchVideos(search)}
            style={{
              border: "none",
              height: 40,
              borderRadius: 25,
              backgroundColor: "white",
              marginLeft: 10,
            }}>
            <SearchIcon />
          </button>
        </Box>
        <Box>
          <button
            onClick={create}
            style={{
              border: "none",
              height: 40,
              width: "20%",
              borderRadius: 10,
              backgroundColor: "white",
              marginBottom: 5,
            }}>
            Add Video
          </button>
        </Box>
      </Box>
      <Box style={{ padding: 30 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {videos.map((video) => (
            <Grid key={video.id.videoId} item xs={2} sm={4} md={4}>
              <Item>
                <iframe
                  id="ytplayer"
                  type="text/html"
                  height="300"
                  width="500"
                  src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=0&origin=http://example.com&#action=share`}></iframe>

                <button
                  style={{
                    width: 150,
                    border: "none",
                    height: 35,
                    borderRadius: 15,
                    backgroundColor: "#33c9eb",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                  }}
                  onClick={() =>
                    setForm({
                      ...form,
                      link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
                    })
                  }>
                  Copy url
                </button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default AddVIdeos;
// navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${video.id.videoId}`);
