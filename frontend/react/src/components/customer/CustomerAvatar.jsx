import { useEffect, useState } from "react";
import { Avatar, Flex } from "@chakra-ui/react";
import {customerProfilePictureUrl} from "../../services/client.js";

export default function CustomerAvatar({ id }) {
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        let active = true;

        customerProfilePictureUrl(id)
            .then(url => {
                if (active) setImgSrc(url);
            })
            .catch(err => console.error("Error loading profile image:", err));

        return () => {
            active = false;
            if (imgSrc) URL.revokeObjectURL(imgSrc);
        };
    }, [id]);

    return (
        <Flex justify="center" mt={-12}>
            <Avatar
                size="xl"
                src={imgSrc}
                name="Customer"
                border="2px solid white"
            />
        </Flex>
    );
}
