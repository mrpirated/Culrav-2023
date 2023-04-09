import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import getUserTeamsAPI from "../../api/getUserTeamsAPI";
import { setTeams } from "../../store/auth";
import SelectEventToViewEventRegisterations from "./SelectEventToViewEventRegisterations";
import TeamCard from "./TeamCard";
import EventTable from "./EventTable";

function EventRegisterations(props) {
	const auth = useSelector((state) => state.auth);

	const [teamUpdated, setTeamUpdated] = useState(false);
	const [selectedCommitee, setSelectedCommitee] = useState(null);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (teamUpdated) {
			getUserTeamsAPI({ token: auth.token }).then((response) => {
				dispatch(setTeams({ teams: response.data }));
			});
			setTeamUpdated(true);
		}
	}, [teamUpdated]);

	return (
		<>
			<div className='flex flex-row w-full'>
				<div className='w-full my-3 px-2'>
					<SelectEventToViewEventRegisterations
						{...props}
						setSelectedEvent={setSelectedEvent}
						selectedEvent={selectedEvent}
						selectedCommitee={selectedCommitee}
						setSelectedCommitee={setSelectedCommitee}
					/>
					<div className='mt-2 max-h-[500px] overflow-auto'>
						<EventTable
							selectedEvent={selectedEvent}
							selectedCommitee={selectedCommitee}
						/>
					</div>
				</div>
				{/* <div className="bg-OccurYellow my-3 mx-4 w-full rounded-md box-border p-4 overflow-auto h-[90vh]">
          <div>
            <p className="text-2xl font-medium">
              {selectedEvent ? selectedEvent.label : "select an event"}
            </p>
            <div className="mt-4">
              {auth.teams.map((element) => {
                return (
                  <TeamCard
                    element={element}
                    checkLeader={viewDetails}
                    buttonText="View Details"
                    allowToggle={true}
                  />
                );
              })}
            </div>
          </div>
        </div> */}
			</div>
		</>
	);
}

export default EventRegisterations;
