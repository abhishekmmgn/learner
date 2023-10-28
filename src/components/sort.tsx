import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filter() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          <SelectItem value="popularity">Popularity</SelectItem>
          <SelectItem value="duration">Duration</SelectItem>
          <SelectItem value="latest">Latest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
