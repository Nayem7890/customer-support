import React, { use } from 'react';
import calendarImg from '../../assets/ri_calendar-line.png'
const IssueManagement = ({ fetchPromise }) => {
    const issueData = use(fetchPromise)
    // console.log(issueData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Card Section-Left */}
            {
                issueData.map(issue => {
                    console.log(issue)
                    return (
                        <div>
                            <div>
                                <div className='shadow-md p-4 rounded-md'>
                                    <div className='flex justify-between items-center'>
                                        <h2 className='font-bold text-[18px] '>{issue.title} </h2>
                                        <h3 className={`font-semibold py-1 px-2 rounded-xl ${issue.status == "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : issue.status == "In Progress" ? "bg-[#F8F3B9] text-[#9C7700]" : "bg-[#E0E0E0] text-[#333]"}`
                                        }>{issue.status} </h3>
                                    </div>
                                    <p className='py-2 text-[#627382] '>{issue.description
                                        } </p>

                                        <div className='flex justify-between items-center'>
                                            <div className='flex gap-4 items-center'>
                                                <p className='text-[#627382]'>{issue.id} </p>
                                                <p className={`font-semibold py-1 px-2 rounded-xl ${issue.priority == "LOW PRIORITY" ? "text-[#0B5E06]" : issue.priority == "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : "text-[#F83044]"}`
                                        }>{issue.priority} </p>
                                            </div>

                                            <div className='flex gap-4 items-center'>
                                                <p className='text-[#627382]'>{issue.customer} </p>
                                                <p className='flex gap-1 text-[#627382]'><img src={calendarImg} alt="" /> {issue.createdAt} </p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }

        </div>




    );
};

export default IssueManagement;