import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils'
import ShallowRenderer from 'react-test-renderer/shallow';
import { assert } from 'chai';
import Counter from './Counter';

//import { TestBed, async, ComponentFixture } from '@angular/core/testing';

//let fixture: ComponentFixture<CounterComponent>;

describe('Counter component', () => {
   
    // beforeEach(() => {
    //     renderer = TestUtils.createRenderer();
    //     renderer.render(<Counter />);
        
    // });

   
    // it('should start with count 0, then increments by 1 when clicked', async(() => {
    //     const countElement = fixture.nativeElement.querySelector('strong');
    //     expect(countElement.textContent).toEqual('0');

    //     const incrementButton = fixture.nativeElement.querySelector('button');
    //     incrementButton.click();
    //     fixture.detectChanges();
    //     expect(countElement.textContent).toEqual('1');
    // }));
});