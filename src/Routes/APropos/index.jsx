import DropDown from "../../components/dropDown";
import Presentation from "../../components/presentation";

export default function APropos ({image}) {
    return (
        <>
            <Presentation background={image} />
            <DropDown name={"Fiabilité"} />
            <DropDown name={"Respect"} />
            <DropDown name={"Service"} />
            <DropDown name={"Sécurité"} />
        </>
    )
}