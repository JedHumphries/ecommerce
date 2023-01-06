import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme"; 

const Footer = () => {
const { palette: { neutral }
} = useTheme()

return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
    ECOMMER
    </Typography>
    <div>
        thern enfwifhirh ewifhei wiehgihgw ew fheig, thojrei huwhv iwfhw ihwbh rfhbw.
        bwefbwu wbvuwbw, ibwhbr ibh bhwib uhrgwu ruvc cnuiqw fefhwuq uewfeugfwvb.
        eihgiwhg hewfew uwpeiw hewpei wh epw ewpwhpwhw whweuh weuhefweu pwhfwp
        igiwhge heguwgew whgewuphew pewij wh hweufwhwpwe hewuepw ehue eiwphew.
    </div>
    </Box>

    <Box>
    <Typography varirant="h4" fontWeight="bold" mb="30px"> About Us</Typography>
    <Typography mb="30px">Careers</Typography>
    <Typography mb="30px">Our Stores</Typography>
    <Typography mb="30px">Terms & Conditions</Typography>
    <Typography mb="30px">Privacy Policy</Typography>
    </Box>

    <Box>
    <Typography varirant="h4" fontWeight="bold" mb="30px"> Customer Care</Typography>
    <Typography mb="30px">Help Center</Typography>
    <Typography mb="30px">Track Your Order</Typography>
    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
    <Typography mb="30px">Returns & Refunds</Typography>
    </Box>

    <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us </Typography>
          <Typography mb="30px">
            50 north Whatever Blvd, Manchester, DC 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: mrJedward@gmail.com
          </Typography>
          <Typography mb="30px">(111)222-3333</Typography>
        </Box>
      </Box>
    </Box>
)
}

export default Footer;