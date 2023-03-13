import renderer from 'react-test-renderer';

it('changes the class when hovered', () => {
  const component = renderer.create(<a href="http://www.facebook.com">Facebook</a>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
