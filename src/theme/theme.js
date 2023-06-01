import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    components: {
        Checkbox: {
            sizes: {
                lg: {
                    control: {
                        width: "40px",
                        height: "40px",
                    },
                },
            },
        },
    },
    icons: {
        
        chevronRight: {
            path: <path d="M1 4h8" />,
            viewBox: "0 0 10 8",
        },
    },
});

