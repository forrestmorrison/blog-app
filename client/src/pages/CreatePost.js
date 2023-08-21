import { Button, TextField } from "@mui/material"

const CreatePost = () => {
  return (
    <div className="create-post">
      <h4>title</h4>
      <TextField 
        sx={{
          width: "100%"
        }}
      />
      <h4>body</h4>
      <TextField 
        sx={{
          width: "100%"
        }}
        multiline
        rows={12}
      />
      <Button
        sx={{
          marginTop: "10px",
          fontWeight: "bold",
          backgroundColor: "#0275d8",
          color: "white",
          "&:hover": {
            color: "#0275d8"
          }
        }}
      >
        Submit
      </Button>
    </div>
  )
}

export default CreatePost