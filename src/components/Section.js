import { Box, Paper, Typography } from "@mui/material"
import Question from "./Question"


const Section = ({ section }) => {
    return (
        <Box className={section.section_id} marginTop={5} >
            <Paper elevation={5} sx={{ padding: 5 }}>
                <Typography variant="h6" component="h2" display="flex" justifyContent="flex-start">{section.section_name}</Typography>

                {section.section_text !== null &&
                    <Typography variant="body1" component="p" display="flex" justifyContent="flex-start">{section.section_text}</Typography>
                }

                {section.text_before_qestions &&
                    <Typography variant="body1" component="p" display="flex" justifyContent="flex-start">{section.text_before_qestions}</Typography>
                }

                {section.questions.map((i) => { return <Question question={i} /> })}
            </Paper>


        </Box>


    )
}
export default Section