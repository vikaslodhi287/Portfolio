import Button from "../../../ui/Button";

function ResumeButton() {
  function handleResumeClick() {
    console.log("Resume Clicked");
  }

  return (
    <Button
      variant="primary"
      size="md"
      onClick={handleResumeClick}
    >
      Resume
    </Button>
  );
}

export default ResumeButton;