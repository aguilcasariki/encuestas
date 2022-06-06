import { Container,Box, Typography } from "@mui/material"
import Section from "./Section"



const Survey=({survey})=>{
    return(
        <Container className={survey.survey_id} sx={{width:700}}>

            <Box marginTop={5}>
                
                <Typography variant="h4" component="h1" display="flex" justifyContent="flex-start">{survey.survey_name}</Typography>

                <Typography variant="subtitle1" component="h3" display="flex" justifyContent="flex-start">{survey.survey_description}</Typography>

            </Box>
            
            {survey.survey_sections.map((i)=>{return <Section section={i}/>})}
            

            


        </Container>
 )
}
export default Survey