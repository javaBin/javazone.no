import { Page, PageHeading } from '../../components/page';
import { Block, BlockHeading, Columns, Column, BackgroundImage, ColumnHeading, P } from '../../components/textblock';
import header from '../../assets/kids/header.jpg';

export default () => (
    <Page name='bergen'>
        <PageHeading background={header}>Academy Bergen</PageHeading>
        <Block block={true}>
            <BlockHeading center={true}>Program</BlockHeading>
            <Columns>
                <Column>
                    <ul className='program'>
                        <li className='program__slot'>
                            <div className='program__hours'>1200</div>
                            <div className='program__event'>
                                <div className='program__title'>Doors open</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1230 - 1245</div>
                            <div className='program__event'>
                                <div className='program__title'>Intro</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1245 - 1345</div>
                            <div className='program__event'>
                                <div className='program__title'>Making Java more dynamic</div>
                                <div className='program__speaker'>Rafael Winterhalter</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1345 - 1400</div>
                                <div className='program__event'>
                                <div className='program__title'>Break</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1400 - 1500</div>
                            <div className='program__event'>
                                <div className='program__title'>Unlock the value of your data with Elasticsearch</div>
                                <div className='programm__speaker'>Aleksander Stensby</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1500 - 1530</div>
                            <div className='program__event'>
                                <div className='program__title'>Break w/snack</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1530 - 1630</div>
                            <div className='program__event'>
                                <div className='program__title'>How to make your code sustainable - what they don’t teach you</div>
                                <div className='programm__speaker'>Christin Gorman</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1630 - 1640</div>
                            <div className='program__event'>
                                <div className='program__title'>Break</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1640 - 1740</div>
                            <div className='program__event'>
                                <div className='program__title'>Universell utforming for alle!</div>
                                <div className='programm__speaker'>Lotte Johansen</div>
                            </div>
                        </li>
                        <li className='program__slot'>
                            <div className='program__hours'>1800</div>
                            <div className='program__event'>
                                <div className='program__title'>Food and drinks at Inside Live & Rock cafe.</div>
                            </div>
                        </li>
                    </ul>
                </Column>
            </Columns>
        </Block>
    </Page>
);
