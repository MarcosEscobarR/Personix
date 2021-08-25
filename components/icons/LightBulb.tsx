interface Props {
    color: string
}

const LightBulb = (props: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12.271" height="22.102" viewBox="0 0 18.271 26.102">
            <path fill={props.color} id="Icon_material-lightbulb-outline" data-name="Icon material-lightbulb-outline" d="M12.72,27.8A1.309,1.309,0,0,0,14.026,29.1h5.22A1.309,1.309,0,0,0,20.551,27.8V26.492H12.72ZM16.636,3a9.132,9.132,0,0,0-5.22,16.627v2.95a1.309,1.309,0,0,0,1.305,1.305h7.831a1.309,1.309,0,0,0,1.305-1.305v-2.95A9.132,9.132,0,0,0,16.636,3Zm3.72,14.487-1.109.783v3h-5.22v-3l-1.109-.783a6.526,6.526,0,1,1,7.439,0Z" transform="translate(-7.5 -3)"/>
        </svg>
    )
}

export default LightBulb
