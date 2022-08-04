import Button from "../components/Button";

export default{
    title: 'Button',
    component: Button
}

const Template = args => <Button {...args} />

export const firstBtn = Template.bind({});

firstBtn.args = {
    backgroundColor: 'red',
    label: 'Press me',
    size: 'md'
}