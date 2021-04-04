import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    searchPlaceHolder: {
      table: {
        defaultValue: { summary: 'search' },
      },
    },
    displayButton: {
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const primary = Template.bind({});
primary.args = {
  displayButton: true,
  searchPlaceHolder: 'My placeholder for the search input',
};
primary.argTypes = {
  searchPlaceHolder: { defaultValue: 'search' },
};
