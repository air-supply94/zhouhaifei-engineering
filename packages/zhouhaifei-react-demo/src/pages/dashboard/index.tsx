import { Container, inject } from 'inversify';
import { fluentProvide, buildProviderModule } from 'inversify-binding-decorators';
import { observer } from 'mobx-react';
import React from 'react';
import getDecorators from 'inversify-inject-decorators';
import { observable, action } from 'mobx';
import { Input } from 'antd';

const TYPES = {
  parent: 'parent',
  book: 'book',
  user: 'user',
};

const container = new Container();
const { lazyInject } = getDecorators(container);

@fluentProvide(TYPES.parent)
  .inSingletonScope()
  .done()
class Parent {
  @inject(TYPES.book) public book: Book;

  @inject(TYPES.user) public user: User;
}

@fluentProvide(TYPES.book)
  .inSingletonScope()
  .done()
class Book {
  @observable public bookName = '';

  @action public setBookName = (bookName: string): void => {
    this.bookName = bookName;
  };
}

@fluentProvide(TYPES.user)
  .inSingletonScope()
  .done()
class User {
  @observable public userName = '';

  @action public setUserName = (bookName: string): void => {
    this.userName = bookName;
  };
}

container.load(buildProviderModule());

@observer
class Demo extends React.Component {
  @lazyInject(TYPES.parent)
  public parent: Parent;

  render() {
    return (
      <>
        <Input
          onChange={(event) => this.parent.book.setBookName(event.target.value)}
          placeholder="请输入书名1"
          value={this.parent.book.bookName}
        />
        <br/>
        <Input
          onChange={(event) => this.parent.user.setUserName(event.target.value)}
          placeholder="请输入用户名"
          value={this.parent.user.userName}
        />
      </>
    );
  }
}

export default function() {
  return <Demo/>;
}
