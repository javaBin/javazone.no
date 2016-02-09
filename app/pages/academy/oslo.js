import { Page, PageHeading } from '../../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../../components/textblock';
import header from '../../assets/academy/header.jpg';

export default () => (
    <Page name='oslo'>
        <PageHeading background={header}>Academy Oslo</PageHeading>
        <Block block={true}>
            <BlockHeading center={true}>Program</BlockHeading>
            <Columns>
                <Column>
                    <ul className='program'>
                        <li className='program__slot'>
                            <div className='program__hours'>1130</div>
                            <div className='program__event'>
                                <div className='program__title'>Doors open</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1200 - 1230</div>
                            <div className='program__event'>
                                <div className='program__title'>Intro</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1230 - 1330</div>
                            <div className='program__event'>
                                <div className='program__title'>EcmaScript 2015: The close future of JavaScript</div>
                                <div className='program__speaker'>Christian Johansen</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1330 - 1345</div>
                                <div className='program__event'>
                                <div className='program__title'>Break</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1345 - 1445</div>
                            <div className='program__event'>
                                <div className='program__title'>Universell utforming for alle!</div>
                                <div className='programm__speaker'>Lotte Johansen</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1445 - 1515</div>
                            <div className='program__event'>
                                <div className='program__title'>Break w/snack</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1515 - 1540</div>
                            <div className='program__event'>
                                <div className='program__title'>lightning talks</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1540 - 1640</div>
                            <div className='program__event'>
                                <div className='program__title'>Making Java more dynamic</div>
                                <div className='program__speaker'>Rafael Winterhalter</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1640 - 1700</div>
                            <div className='program__event'>
                                <div className='program__title'>Break</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1700 - 1800</div>
                            <div className='program__event'>
                                <div className='program__title'>How to make your code sustainable - what they don’t teach you</div>
                                <div className='program__speaker'>Christin Gorman</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1800</div>
                            <div className='program__event'>
                                <div className='program__title'>Food and drinks</div>
                            </div>
                        </li>
                    </ul>
                </Column>
            </Columns>
        </Block>
    </Page>
);