import { Box, Typography } from "@mui/material"

const Question = ({ question }) => {
    return (
        <Box marginTop={5} className={question.question_id} >

            <Typography variant="subtitle2" component="h6" display="flex" justifyContent="flex-start">
                {question.question_text}
            </Typography>


        </Box>
    )
}
export default Question