import * as React from "react";
import * as ReactDOM from "react-dom";
import {Navi} from './components/navi'
import {Title} from './components/title'
import {Row} from './components/row'

const App:React.FC = () => {

    const menu = [
        {
            label: 'Youtube',
            url: 'https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ'
        },
        {
            label: 'GitHub',
            url: 'https://github.com/alexmercedcoder'
        },
        {
            label: 'LinkedIn',
            url: 'http://www.linkedin.com/in/alexmerced'
        },
        {
            label: 'Podcast',
            url: 'https://open.spotify.com/show/1kMcquypdIElTu4Nu98XPM'
        },
        {
            label: 'Slack',
            url: 'https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA'
        },
        {
            label: 'Discord',
            url: 'https://discord.gg/hQ2AySW'
        },
        {
            label: 'Spectrum',
            url: 'https://spectrum.chat/devnursery'
        },
    ]


    return (
        <>
        <Navi menu={menu} />
        <Title/>

        <Row theClass='paragraph'>
            <p>Alex Merced is a developer with a focus on full stack web development with a focus on <span>React, Typescript, GraphQL, Apollo, Svelte, and StencilJS.</span></p>
        </Row>

        
        </>
    )

}

ReactDOM.render(<App/>, document.getElementById('app'))