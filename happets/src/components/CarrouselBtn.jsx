import { Button } from '@chakra-ui/react'

export default function CarrouselBtn({ icon: Icon }) {

    const iconProps = { boxSize: 6 };

    return (
        <Button colorScheme='green'>
            <Icon { ...iconProps }/>
        </Button>
    )
}